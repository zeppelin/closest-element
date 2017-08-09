'use strict';

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module) {
'use strict';

var proto = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}
});

var matches = interopDefault(index);

function closest (elm, selector, root, excludeSelf) {
  if (root != null) {
    if (excludeSelf == null && root instanceof Element === false) {
      excludeSelf = root;
      root = null;
    }
  }

  if (excludeSelf) {
    elm = elm && elm.parentElement;
  }

  if (!elm) {
    return null
  }

  if (typeof selector === 'string') {
    if (matches(elm, selector)) {
      return elm
    }
  } else if (elm === selector) {
    return elm
  }

  var parent = elm.parentElement;

  if (elm == root || parent == root) {
    return null
  }

  return closest(parent, selector, root)
}

module.exports = closest;
//# sourceMappingURL=closest.cjs.js.map
