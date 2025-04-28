service-worker.js

const CACHE_NAME = 'GOP-gestaoOdontolegalPericial';
const urlsToCache = [
  './', 
  './adm/cadastro-usuario/cadastro-usuario.html',
  './adm/cadastro-usuario/css/cadastro-usuario.css',
  './adm/cadastro-usuario/js/cadastro-usuario.js',
  './casos/cadastro-casos/cadastro-caso.html',
  './casos/cadastro-casos/css/cadastro-caso.css',
  './casos/cadastro-casos/js/cadastro-caso.js',
  './casos/visualizacao-caso-especifico/visualizacao-de-caso.html',
  './casos/visualizacao-caso-especifico/css/style.css',
  './casos/visualizacao-caso-especifico/js/script.js',
  './casos/visualizacao-casos/vis-casos.html',
  './casos/visualizacao-casos/css/vis-casos.css',
  './casos/visualizacao-casos/js/script.js',
  './login/login.html',
  './login/css/login.css',
  './login/js/script.js', 
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aberto!');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          function(res) {
            if(!res || res.status !== 200 || res.type !== 'basic') {
              return res;
            }
            var responseToCache = res.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return res;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

