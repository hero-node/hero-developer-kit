/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer/app-drawer.html","64a0ae88720b510380e3fc725b4b6d04"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","350fc37d1d1c7044c213567b6039da09"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","fad90269cea2f83e1f4df1950bb2b053"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","1b99a57f871235783db6dfb812d7f3e0"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","a21d6a2fc019eb59d10586aada74313e"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","da0e3689ccfacad60e9abb1d0580a4de"],["/bower_components/app-layout/helpers/helpers.html","55000b333a0c02f33aab3af900c50206"],["/bower_components/font-roboto/roboto.html","086707e4369f60afedcafb16050a7618"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","10a7e56c69fcefaf654e6baf194431b2"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","b9a8e766d0ab03a5d13e275754ec3d54"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","52203f1040958d419175fa7112377286"],["/bower_components/iron-doc-viewer/iron-doc-property-styles.html","b6287b6bd53e680df10a2e554ae086c6"],["/bower_components/iron-doc-viewer/iron-doc-property.html","b05962a80cbc0726a4fc8718ec6c9f63"],["/bower_components/iron-doc-viewer/iron-doc-viewer-styles.html","9add755eab9581f27d5523b72077f765"],["/bower_components/iron-doc-viewer/iron-doc-viewer.html","7dc62e45e200a9802549b3c98e81e6d9"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","fe166ab4af119b99c7dca854e26792fa"],["/bower_components/iron-flex-layout/iron-flex-layout.html","f6d0b5075d5f70cac9b4bd66bd88c459"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-icon/iron-icon.html","522d70fee40ae3b04f6fd685881812ee"],["/bower_components/iron-icons/iron-icons.html","c8f9154ae89b94e658e4a52eee690a16"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8fb45b1b4668dae069f5efb5004c2af4"],["/bower_components/iron-input/iron-input.html","25508a4b3ec0445cb7c53230f84a1e7d"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","8c4fc9ccbb28f3bf68c621ebc3859fb7"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","77e57b30cac5c360d4a21f4fae2a6c33"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","34361a822046d569355025b67e48d680"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","51191fe7de42d8a6a31503eab8ada83b"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","0185cbe8d7139c9e92af3a9af67feb17"],["/bower_components/iron-selector/iron-multi-selectable.html","df72d8da78761be52da4874ebfd790d7"],["/bower_components/iron-selector/iron-selectable.html","7f63a989f56f1ae1ac1e1c09f5e543ce"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/marked-element/marked-element.html","a3c2b8304f64ef03b76c8fc8e2c8bb56"],["/bower_components/marked-element/marked-import.html","935603373e4046660d3944abb73939f1"],["/bower_components/marked/lib/marked.js","44df24de3c2cf4b3b56d824a9357f5f5"],["/bower_components/neon-animation/animations/cascaded-animation.html","3a5a8c22afe014a904557b66938c44ba"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/hero-animation.html","4feaf331f46d411ce9ad465da1dbb65e"],["/bower_components/neon-animation/animations/ripple-animation.html","4d33252f387c84d0702efaaf510990b0"],["/bower_components/neon-animation/animations/scale-down-animation.html","e9cedffa151b388200cb2a610b2252fc"],["/bower_components/neon-animation/animations/scale-up-animation.html","20059304b9b7e9377379ad75110ef2fc"],["/bower_components/neon-animation/animations/slide-down-animation.html","31286bfe0b2cb6f28ef5e1f9d181f641"],["/bower_components/neon-animation/animations/slide-from-bottom-animation.html","12eea18013bf5b89c642fde725469a62"],["/bower_components/neon-animation/animations/slide-from-left-animation.html","cb18058340412077b0b0a8a7228a79a6"],["/bower_components/neon-animation/animations/slide-from-right-animation.html","79f28e3d4580cef016e6ae8c63384e98"],["/bower_components/neon-animation/animations/slide-from-top-animation.html","565391366846573f1725585d15b9baad"],["/bower_components/neon-animation/animations/slide-left-animation.html","a44c677c010daf7872b77f53bcd86e58"],["/bower_components/neon-animation/animations/slide-right-animation.html","b9908b67414ba0dfc7442eb1207d05fc"],["/bower_components/neon-animation/animations/slide-up-animation.html","bee63970c6ffc2706419533c9b2bd65e"],["/bower_components/neon-animation/animations/transform-animation.html","c64feaff2d50eb6f6633c644063c6aa3"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animated-pages.html","9b68e72c661e0c91e38dcaee8e0b374d"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","840505cc293211cccc277c62261b60bf"],["/bower_components/neon-animation/neon-shared-element-animatable-behavior.html","d891492be81d44fcf6dfb54fd8d73ae2"],["/bower_components/neon-animation/neon-shared-element-animation-behavior.html","59b343c52eef4ff93901a3cba99577d6"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","8eaf13f49324367c73031031e7476846"],["/bower_components/paper-checkbox/paper-checkbox.html","ea5dc6cbf19fd01871b256a4f1718375"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","b9cf5384b29cd12a724965080916b6f1"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","1d272748882199e0e9a9b3cdce6333cf"],["/bower_components/paper-dialog/paper-dialog.html","7a8d86ed89c215baf8cc42e4d7335271"],["/bower_components/paper-fab/paper-fab.html","bdbcdcba723f04d28b53b0f230a3f87b"],["/bower_components/paper-icon-button/paper-icon-button.html","4a5cbc3fe046e2c070d4bf34ec7463d6"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","be767e95dc3726d5263d3e958dbb3796"],["/bower_components/paper-input/paper-input-char-counter.html","c9e52a2d75b93ea3abd87022d87c0c6a"],["/bower_components/paper-input/paper-input-container.html","30c9bf04802e25615635266a453554c5"],["/bower_components/paper-input/paper-input-error.html","3cec14d4d86f4e4b5ad349ba8a2dac9f"],["/bower_components/paper-input/paper-input.html","7c93a1704277d391b821aef5e424b726"],["/bower_components/paper-item/paper-icon-item.html","d9f23641c16cbcf83b20e3ba51de18e7"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-shared-styles.html","389eedfc65ee58b1f0d67281d0bad1a1"],["/bower_components/paper-item/paper-item.html","5099885c3bd34e04df7796d48851c4a4"],["/bower_components/paper-material/paper-material-shared-styles.html","3a5f381dbdbdabbfd7c122e1c02a60e3"],["/bower_components/paper-material/paper-material.html","82c0fde850e52dc3bfdfc5efa34d5a15"],["/bower_components/paper-menu/paper-menu-shared-styles.html","d284d59303c2383edf6c626dd679302d"],["/bower_components/paper-menu/paper-menu.html","3d9cf400d7ee8753ab6d0cb6358bb711"],["/bower_components/paper-ripple/paper-ripple.html","30fa6456055a5725c6492f8e5a364f39"],["/bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["/bower_components/paper-spinner/paper-spinner-styles.html","41385e612365d851bb3c3611fc9bddb6"],["/bower_components/paper-spinner/paper-spinner.html","940e64bbde54dad918d0f5c0e247a8bd"],["/bower_components/paper-styles/color.html","c53abb41659bf242d420a7f93b977e91"],["/bower_components/paper-styles/default-theme.html","25d95202be2ff5b60f651924e66abed2"],["/bower_components/paper-styles/shadow.html","0db3ad33dddb4766c259232951ec158b"],["/bower_components/paper-styles/typography.html","3f95c68bcd0bd4710f3469c4900533d6"],["/bower_components/paper-toast/paper-toast.html","ce2270c5dfe0479d7e12749e38a71f4c"],["/bower_components/polymer/polymer-micro.html","50808e46395446dc1648b6bbf47021fb"],["/bower_components/polymer/polymer-mini.html","fc2b0b7f0fbdd0e3c266f1c7ba6443b8"],["/bower_components/polymer/polymer.html","5f9d1e80dd8bc366769c4267529478f4"],["/bower_components/prism-element/prism-highlighter.html","d4d4dec80d9b212b7ed18f544dc89318"],["/bower_components/prism-element/prism-import.html","94e49629fc3c5cb76c1e23563547923f"],["/bower_components/prism/prism.js","b2d9d2dc28049e5590db59a39867530a"],["/bower_components/prism/themes/prism.css","298e3aafa62f48b863042aa3696a2b34"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","84ad9c3ed8f3f8de437bcb63e194bf29"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","0fc977baabe843e858c7d6cde05986e7"],["/index.html","d4310da09ffc7b687d4ccf9cb37cfa38"],["/manifest.json","b4aec6f31f9b7310408e32d4c1c9aed5"],["/src/elements/dr-a-b-test.html","6361dca1544f8474fc7cd080f9c937e2"],["/src/elements/dr-button.html","d7c156ee577dfb9b3546f438638b7ebc"],["/src/elements/dr-table-view-cell.html","6761050f5fe3ab6bfb19871871a5ace4"],["/src/elements/dr-table-view.html","53a0dd75e50bc2f34f2027153cb14f43"],["/src/elements/dr-text-field.html","68459cd4eb0d2777631ab45f8e6afb2f"],["/src/elements/hero-alert.html","482bfc6592213eb51d0c419675ca7123"],["/src/elements/hero-behavior.html","1785eac0e323995b57e739f26615e29d"],["/src/elements/hero-button.html","bd19662949fa7981a9c95f8ad7e4d315"],["/src/elements/hero-check-box.html","d28b0f65a747feb797039b07f49586ee"],["/src/elements/hero-confirm.html","36e15fb7797933db248b2e92c51e1d20"],["/src/elements/hero-device.html","27069cf6cdeb60e7fba16665fd67669d"],["/src/elements/hero-dialog.html","8d0ccc9d79bd8b04efea60451a3febd9"],["/src/elements/hero-image-view.html","8593513192eff9dfec450cd61e1ca8a1"],["/src/elements/hero-label.html","0c72ada63d3d405de42df4e241dac8dd"],["/src/elements/hero-loading.html","6ba081e47160b273cc497e3ea6ff0222"],["/src/elements/hero-location-view.html","f26a58fe85acec69946f8e69e26cb52a"],["/src/elements/hero-picker-view.html","8f7bf3b639d52073365018d89d8f6e99"],["/src/elements/hero-scan-bar-code-view.html","e51b85ac80ee21e28ed6733e953d30b5"],["/src/elements/hero-scroll-view.html","c1042e94ab2d608e30e8d958f214d88e"],["/src/elements/hero-switch.html","f4ac7c80075f2dc72f42643da973cef7"],["/src/elements/hero-table-view-cell.html","9b7b8bd5bdc504dcefa0f45a12d0f9ba"],["/src/elements/hero-table-view-section.html","36dc3efc31a05a0c22ff5c0034763a57"],["/src/elements/hero-table-view.html","ead0ad3e71967e3cfebd28ae5b4e88a2"],["/src/elements/hero-text-animation-view.html","18578104a1d9c7b44b2be25a63d523dd"],["/src/elements/hero-text-animation-view/animate.css","6e0eeefcd169b8c0a327992767e6d4b2"],["/src/elements/hero-text-animation-view/jquery.fittext.js","4cdde53ad81d116aba8d0ff945fa4207"],["/src/elements/hero-text-animation-view/jquery.js","77e30920ee4a5fb932c4b5181df84b8a"],["/src/elements/hero-text-animation-view/jquery.lettering.js","4f7ffb18ce4d1dac7255cf16f9716fab"],["/src/elements/hero-text-animation-view/jquery.textillate.js","8eaa17c74bc761d77327096a30021448"],["/src/elements/hero-text-animation-view/style.css","2073fe914f7e48a8de8d49caf5962bf3"],["/src/elements/hero-text-field.html","d069814fd6e81b8179dec8b6ea091963"],["/src/elements/hero-text-view.html","f6a927671897c68aba9f195c836ce8e5"],["/src/elements/hero-toast.html","7a5e3ffa64a30e0543a28c27b09172c6"],["/src/elements/hero-toolbar-item.html","345995d0a9fedf3c069e2d740c4900a6"],["/src/elements/hero-view.html","081c5fafc858c95413b514dc68e6d6d1"],["/src/elements/hero-web-view.html","ad02f327ede2f64104d3c24406ae4176"],["/src/elements/mafia-loan-table-cell.html","37c2c3ad05667bde1b64c06876a9634c"],["/src/elements/mafia-loan-table.html","f7be700a4ee55d2bf970c922aa951bb4"],["/src/elements/mafia-ocr-view.html","29502a88da669cf23254973cef4b54a9"],["/src/elements/pickerviewbase/anypicker-font.css","5b30317de68ca9081e18e5afd259975b"],["/src/elements/pickerviewbase/anypicker-ios.css","6e769a4cc68ba3d345f765f0a585ccfb"],["/src/elements/pickerviewbase/anypicker.css","026f8b379cfb04169637e7f3eb8b3a92"],["/src/elements/pickerviewbase/anypicker.js","d1d50d86df5a23943e6429147f65dd88"],["/src/elements/pickerviewbase/jquery-1.11.1.min.js","fe84a54bc0710a9ceb810aa5b9bca0a6"],["/src/elements/ui-view.html","b4e637466cbd9083d86231f2970be1e2"],["/src/hero-app.html","ffb043a14ebf8cd994fd6d8df03406b5"],["/src/hero-view-controller.html","553bf2706522c075bf6a9829f3e71205"],["/src/hero-web-app.html","65e447ac3dfc8a02b69c208abfd222a2"],["/src/home-hero-about.html","ec04c6ba684aefd367c5478f189b2d13"],["/src/home-hero-code.html","64e54171b6f67110812349953a8fa672"],["/src/home-hero-demo.html","6b9f1d055677144e6f5c601adf1b6cdf"],["/src/home-hero-doc.html","942599eaf3c9d61c16479960fcc40f16"],["/src/home-hero-guide.html","83806da2d5bd516ac0eb9b485bcd66e5"],["/src/home-page.html","dbec4f6f63be23961efaa9f8b0ce1b48"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




