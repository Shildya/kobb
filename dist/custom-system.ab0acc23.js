// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../js/custom-system.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  // SELECTION //
  var counter = 0;
  var images = document.querySelectorAll('.image');
  var imagesOrder = [images[0], images[1], images[9], images[2], images[3], images[4], images[5], images[6], images[10], images[8], images[7]];
  images = imagesOrder;
  var image = images[counter];
  var blacks = document.querySelectorAll('.black');
  var blacksOrder = [blacks[0], blacks[1], blacks[9], blacks[2], blacks[3], blacks[4], blacks[5], blacks[6], blacks[10], blacks[8], blacks[7]];
  blacks = blacksOrder;
  var black = blacks[counter];
  var whites = document.querySelectorAll('.white');
  var whitesOrder = [whites[0], whites[1], whites[9], whites[2], whites[3], whites[4], whites[5], whites[6], whites[10], whites[8], whites[7]];
  whites = whitesOrder;
  var white = whites[counter];
  var lastHue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var lastSaturation = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
  var lastLuminosity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var titles = ['Manchette D', 'Manche D', 'Bandes D', 'Bas', 'Torse', 'Col', 'Zips', 'Logo', 'Bandes G', 'Manche G', 'Manchette G'];
  var partTitle = document.querySelector('.part__title');
  partTitle.innerHTML = titles[counter];
  var leftArrow = document.querySelector('.left-arrow');
  var rightArrow = document.querySelector('.right-arrow');
  leftArrow.addEventListener('click', function () {
    if (counter > 0) {
      counter--;
      image = images[counter];
      black = blacks[counter];
      white = whites[counter];
      partTitle.innerHTML = titles[counter];
      hueInput.value = lastHue[counter];
      saturateInput.value = lastSaturation[counter];
      luminosityInput.value = lastLuminosity[counter];
      saturateBar.style.filter = 'hue-rotate(' + hueInput.value + 'deg)';
      rightArrow.style.opacity = 1;
    }

    ;

    if (counter == 0) {
      leftArrow.style.opacity = 0;
    }

    ;
  });
  rightArrow.addEventListener('click', function () {
    if (counter < 10) {
      counter++;
      image = images[counter];
      black = blacks[counter];
      white = whites[counter];
      partTitle.innerHTML = titles[counter];
      hueInput.value = lastHue[counter];
      saturateInput.value = lastSaturation[counter];
      luminosityInput.value = lastLuminosity[counter];
      saturateBar.style.filter = 'hue-rotate(' + hueInput.value + 'deg)';
      leftArrow.style.opacity = 1;
    }

    ;

    if (counter == 10) {
      rightArrow.style.opacity = 0;
    }
  }); // HUE SYSTEM //

  var hueInput = document.querySelector('#hue__input');
  hueInput.addEventListener('input', function () {
    lastHue[counter] = hueInput.value;
    image.style.filter = 'hue-rotate(' + hueInput.value + 'deg) saturate(' + saturateInput.value + '%)';
    saturateBar.style.filter = 'hue-rotate(' + hueInput.value + 'deg)';
  }); // SATURATION SYSTEM //

  var saturateInput = document.querySelector('#saturate__input');
  var saturateBar = document.querySelector('.saturate__bar');
  saturateInput.addEventListener('input', function () {
    lastSaturation[counter] = saturateInput.value;
    image.style.filter = 'hue-rotate(' + hueInput.value + 'deg) saturate(' + saturateInput.value + '%)';
  }); // LUMINOSITY SYSTEM //

  luminosityInput = document.querySelector('#luminosity__input');
  luminosityInput.addEventListener('input', function () {
    lastLuminosity[counter] = luminosityInput.value;

    if (luminosityInput.value < 0) {
      black.style.opacity = luminosityInput.value / -100;
      white.style.opacity = 0;
    } else if (luminosityInput.value > 0) {
      white.style.opacity = luminosityInput.value / 100;
      black.style.opacity = 0;
    } else {
      black.style.opacity = 0;
      white.style.opacity = 0;
    }
  });
});
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51034" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/custom-system.js"], null)
//# sourceMappingURL=/custom-system.ab0acc23.js.map