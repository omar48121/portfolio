// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('mi-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/styles-dark.css',
        '/css/code.hover.css',
        '/css/navbar.css',
        '/css/normalize.css',
        '/js/code.hover.js',
        '/js/dark.mode.js',
        '/js/globe.js',
        '/js/grayscale.js',
        '/js/mail.service.js',
        '/js/navbar.js',
        '/img/icons/sun.png',
        '/img/icons/moon.png',
        '/img/icons/angular.png',
        '/img/icons/azure.png',
        '/img/icons/bootstrap.png',
        '/img/icons/c-sharp.png',
        '/img/icons/css.png',
        '/img/icons/github.png',
        '/img/icons/gitlab.png',
        '/img/icons/html.png',
        '/img/icons/java.png',
        '/img/icons/jquery.png',
        '/img/icons/js.png',
        '/img/icons/linux.png',
        '/img/icons/mongo.png',
        '/img/icons/node.png',
        '/img/icons/react.png',
        '/img/icons/sql-alt.png',
        '/img/icons/terminal.png',
        '/img/icons/typescript.png',
        '/img/icons/visual-basic.png',
        '/img/icons/vs-code.png',
        '/img/projects/cenaduria.png',
        '/img/bosch.png',
        '/img/linkthinks.png',
        '/img/omar-bg.png',
        '/img/utna.png',
        '/icons/icon512.png',
        '/icons/icon192.png',
        '/icons/icon180.png',
        '/icons/icon144.png',
        '/files/cv.pdf',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('offline', () => {
  console.log('Sin conexión a internet');
});

self.addEventListener('online', () => {
  console.log('Conexión a internet restablecida');
});