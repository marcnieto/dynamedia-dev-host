'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cb36ac9e50774fb36d3a247b35b78457",
"version.json": "6ae82b60926e1dfb80a78babd7377565",
"index.html": "e6259f9493a36e89dd4e10246751cc05",
"/": "e6259f9493a36e89dd4e10246751cc05",
"main.dart.js": "5934e8a44369c03cfb0829397fcf9e9a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aedb7b15006cbd4100bbc26521f261fc",
"assets/AssetManifest.json": "fb6e74411d8c67c9351adf33fd382558",
"assets/NOTICES": "c7dd99ac4b6b97ff06996a6f7bec34e6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "093136fc700c3fd3406aefbc04beba1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fa1d0cbae1dbef66fbcb2948b6f29ffb",
"assets/fonts/MaterialIcons-Regular.otf": "abf8c435f3f13eae0c247eb95b511719",
"assets/assets/paradise/ac_gtr_chorus_F%2523min.wav": "d05f001b05f79912973bb10000551b6c",
"assets/assets/paradise/ac_gtr_break_D.wav": "9cc6fb72a586b6e2e2acfc85a4c401e0",
"assets/assets/paradise/elec_gtr_riff_E_1.wav": "30ff5b7d7169a71d69f66349d6e2acf0",
"assets/assets/paradise/synth_bass_riff_D_verse1_variation.wav": "41fbea36f25a59ae08b9c317dfe39ee8",
"assets/assets/paradise/elec_gtr_riff_E_2.wav": "f20187779d6bbf7f753626bb43970add",
"assets/assets/paradise/drums_prechorus_fill_2.wav": "a17ec5dbd2c8839749226b962460ded3",
"assets/assets/paradise/bass_gtr_riff_E.wav": "40109cf585d422224a3dad0afe2a7c62",
"assets/assets/paradise/ac_gtr_end_E_long.wav": "b494bdfa15ab67979334f38d17b6bd2f",
"assets/assets/paradise/synth_bass_riff_F%2523min.wav": "766ce842e8f851ae349d3010f73038ac",
"assets/assets/paradise/bass_gtr_riff_D.wav": "2b2fe55ec13f5f4b28d1214eadf06361",
"assets/assets/paradise/scratch_3.wav": "d7f9213a73161c79264e2cd547337c49",
"assets/assets/paradise/scratch_2.wav": "7062a04677ba75081eec81f09cfbb8d5",
"assets/assets/paradise/elec_gtr_riff_D_2.wav": "d93baad69a3f0d88311cb9cba5745126",
"assets/assets/paradise/bass_gtr_riff_Emin_break.wav": "9743302e7af0fcdd45dfd712c848071d",
"assets/assets/paradise/scratch_1.wav": "6d5ad58d547d12e19ab3fa10d07ed3a0",
"assets/assets/paradise/elec_gtr_riff_D_1.wav": "7bd78b09df8c97e477c44373b0d4e25f",
"assets/assets/paradise/elec_gtr_riff_break.wav": "41bb074469edafa6490095477db0afe3",
"assets/assets/paradise/elec_gtr_riff_verse1_variation.wav": "3fddcdd9b529b6e7387d1d62b351bb7b",
"assets/assets/paradise/drums_groove_2.wav": "8f8b23f0d53bdf7b5940d0991ceee8e0",
"assets/assets/paradise/fx_1.wav": "dedb37afd3bbef5a92e13b7056652470",
"assets/assets/paradise/synth_bass_riff_Emin.wav": "4b680266dccc15f669240fd71967701f",
"assets/assets/paradise/bass_gtr_riff_F%2523min_2.wav": "4f4a76ca85193a16477dd87caa3b2489",
"assets/assets/paradise/scratch_4.wav": "7755067792d2c9ed8c2db9bb93dfba5d",
"assets/assets/paradise/drums_groove_1.wav": "318069edba59f9702d125d02d14ee61a",
"assets/assets/paradise/elec_gtr_lead_ending_E.wav": "b59ec894983a98e0a0213e915c299748",
"assets/assets/paradise/bass_gtr_riff_F%2523min_1.wav": "bbce6b2f9000ae40256bfe936761ae98",
"assets/assets/paradise/bass_gtr_riff_Emin_1.wav": "b2cbb6316221967b5a079eeb90033170",
"assets/assets/paradise/synth_bass_riff_E.wav": "a53e53089ff9605b5b4d7e6ee7d3175f",
"assets/assets/paradise/ac_gtr_break_Emin.wav": "33cfa22e140ccc3d5b3fd0a1fe9cc11c",
"assets/assets/paradise/bass_gtr_verse1_variation.wav": "554aaa28252264265cc877d53b6f52f7",
"assets/assets/paradise/synth_bass_riff_D.wav": "a1b8c22cd2e3b3e893e9e4331dc3ad68",
"assets/assets/paradise/bass_gtr_riff_Emin_2.wav": "fe9558f352bb6c77a4f0193ef7f7f094",
"assets/assets/paradise/synth_bass_riff_D_break.wav": "f546d2640702a5ec5974b8c3e659c4bc",
"assets/assets/paradise/ac_gtr_chorus_D.wav": "abfb3fdf13ceb57169a4c8a8cd4da43f",
"assets/assets/paradise/ac_gtr_chorus_E.wav": "3e6b03c0f904032e6463260577b5cba5",
"assets/assets/paradise/drums_prechorus_groove_1.wav": "73d45fc23dfeb132560dcf20c551f6f4",
"assets/assets/paradise/backing_vox_full.wav": "18fb685dc59850cc9a182d7f4eb27170",
"assets/assets/paradise/elec_gtr_solo_1.wav": "c2025061e72e10919a5779895647c9dc",
"assets/assets/paradise/ac_gtr_main.wav": "fcbe8a5dbb953bfe65ffe7bfb2d77563",
"assets/assets/paradise/drums_prechorus_groove_2.wav": "8a53a33aa125b91c815e512f41df0981",
"assets/assets/paradise/vox_main_full.wav": "3914e032fa375bcfeb8215c9a196d3b5",
"assets/assets/paradise/elec_gtr_rhythm_D_break.wav": "3d91a969a3350c91e46effd5b70d183a",
"assets/assets/paradise/drums_break_fill.wav": "7f9b6b93906635da57b47c63696c2cd7",
"assets/assets/paradise/drums_verse_groove_1.wav": "333a13a4aeb584e4cdd415f7379492aa",
"assets/assets/paradise/ac_gtr_prechorus_2bar_lead_in.wav": "e208e8f0f51cd4b178b6a76a56056e5f",
"assets/assets/paradise/bass_gtr_riff_D_break.wav": "b336d509f4c03b0e68b80a48e1bf358f",
"assets/assets/paradise/ac_gtr_chorus_Emin.wav": "db85ee4ad56777b17aafecb432d99f80",
"assets/assets/paradise/elec_gtr_riff_prechorus_D.wav": "3295a519918c487d65d2afd9d52dd048",
"assets/assets/paradise/drums_verse_groove_2.wav": "d70e6a09874a5c64ffd2e18e3b7f37ba",
"assets/assets/paradise/ac_gtr_verse1_variation.wav": "59171e59c2e922fdaaf787b81c53fc35",
"assets/assets/paradise/elec_gtr_riff_D.wav": "cc35a6fe8139f831e6655c1e87188aa2",
"assets/assets/paradise/elec_gtr_rhythm_D.wav": "01a2f8e05aace6c833d36bc4906d5e00",
"assets/assets/paradise/elec_gtr_rhythm_E.wav": "821fda91d067c2797678ef94b6434c68",
"assets/assets/paradise/elec_gtr_lead_1bar_leadin.wav": "3a0518a296ba8038e004e542d515fc0d",
"assets/assets/paradise/drums_verse1_variation.wav": "ad8c06a47731ec5dfa9e34d7a5dab275",
"assets/assets/paradise/elec_gtr_rhythm_prechorus_D.wav": "bc8aadd8d52dfdaccc351119675542ec",
"assets/assets/paradise/drums_fill_intro.wav": "cdad8b2d6f2a8d69043f9b05056a11a6",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
