self.addEventListener('install', evt => {
    console.log("service worker has been installed!");
})

self.addEventListener('activate', evt => {
    console.log("service worker has been installed!");
})

//declenche lorsqu une requete HTTP est emise par l application
// permet d intercepter des requetes et d y repondre de façon personnalisee
self.addEventListener('fetch', evt => {
    console.log("Ressource récupéreée" + evt.request.url);
})