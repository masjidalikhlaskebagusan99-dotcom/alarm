self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

// Wake up tiap 30 detik untuk cek alarm
self.addEventListener('activate', e => {
  setInterval(() => {
    self.clients.matchAll().then(clients => {
      clients.forEach(c => c.postMessage('tick'));
    });
  }, 30000);
});