import matches from 'matches-selector'

function closest (elm, selector, root, excludeSelf) {
  if (root != null) {
    if (excludeSelf == null && root instanceof Element === false) {
      excludeSelf = root
      root = null
    }
  }

  if (excludeSelf) {
    elm = elm && elm.parentElement
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

  const parent = elm.parentElement

  if (elm == root || parent == root) {
    return null
  }

  return closest(parent, selector, root)
}

export default closest
