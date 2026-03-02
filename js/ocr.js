// OCR module - camera capture + Tesseract.js integration
const OCR = {
  worker: null,
  stream: null,
  isInitialized: false,

  async loadLibrary() {
    if (window.Tesseract) return;
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = './lib/tesseract/tesseract.min.js';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Failed to load Tesseract.js'));
      document.head.appendChild(script);
    });
  },

  async initWorker() {
    if (this.isInitialized) return;
    await this.loadLibrary();
    this.worker = await Tesseract.createWorker('eng', 1, {
      workerPath: './lib/tesseract/worker.min.js',
      corePath: './lib/tesseract/',
      langPath: './lib/tesseract/',
      cacheMethod: 'none',
      logger: (info) => {
        if (info.status === 'recognizing text') {
          UI.renderOCRProgress(info.progress);
        }
      }
    });
    this.isInitialized = true;
  },

  async startCamera() {
    this.stopCamera();
    const video = document.getElementById('scanner-video');
    const status = document.getElementById('scanner-status');
    if (!video) return;

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      });
      video.srcObject = this.stream;
      await video.play();
      if (status) status.textContent = 'Point camera at a book page';
    } catch (err) {
      if (status) status.textContent = 'Camera not available. Use Upload Photo instead.';
      console.warn('Camera error:', err);
    }
  },

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
  },

  async capture() {
    const video = document.getElementById('scanner-video');
    if (!video || !video.srcObject) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);

    this.stopCamera();
    this._preprocessImage(ctx, canvas.width, canvas.height);
    await this._recognize(canvas);
  },

  uploadImage() {
    document.getElementById('scanner-file-input').click();
  },

  async handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    img.onload = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      this._preprocessImage(ctx, canvas.width, canvas.height);
      this.stopCamera();
      await this._recognize(canvas);
    };
    img.src = URL.createObjectURL(file);
    event.target.value = '';
  },

  _preprocessImage(ctx, width, height) {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Convert to grayscale
      const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      // Binarize with Otsu-like threshold
      const val = gray > 128 ? 255 : 0;
      data[i] = data[i + 1] = data[i + 2] = val;
    }

    ctx.putImageData(imageData, 0, 0);
  },

  async _recognize(canvas) {
    UI.renderOCRProgress(0);

    try {
      await this.initWorker();
      const { data: { text } } = await this.worker.recognize(canvas);
      const matches = Search.findNamesInText(text);
      UI.renderOCRResults(text, matches);
    } catch (err) {
      console.error('OCR Error:', err);
      UI.app.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-text">OCR failed: ${err.message}</div>
          <button class="ocr-scan-again" style="margin-top:16px" onclick="location.hash='#/scan'">Try Again</button>
        </div>
      `;
    }
  }
};
