# closest-element

Find the closest element that matches a selector or an element

## Usage

```js
closest(element, selectorOrElement, [rootElement = null, [excludeSelf = false]])
```

`element`, the first element.

`selectorOrElement`, a string of selector expression or an element to match elements against.

`rootElement`, if matches current element, this function will stop traversing up.

`excludeSelf`, whether skip self from matching.

Returns matched element, or `null` if no element found.

Example:

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
</nav>
```

```js
import closest from 'closest-element'

closest(document.querySelector('ul'), 'ul') // returns <ul>
closest(document.querySelector('ul'), 'ul', true) // returns null
closest(document.querySelector('a'), 'ul li', document.querySelector('li')) // <li>
closest(document.querySelector('a'), 'ul', document.querySelector('li')) // false
closest(document.querySelector('a'), document.querySelector('nav')) // <nav>
```

### Files

```
src/
  - cloest.js // in es6

dist/
  - closest.cjs.js // CMD
  - closest.es6.js // ES6 module, compiled with Buble
  - closest.js     // UMD
```
