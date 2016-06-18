const test = require('tape')
const domify = require('domify')

const doc = domify(`
<div>
  <nav>
    <div class="nav">
      <ul>
        <li><a></a></li>
        <li><a></a></li>
        <li><a></a></li>
        <li id="fourth"><a></a></li>
      </ul>
    </div>
  </nav>
</div>
`.trim())

const closest = require('../dist/closest.cjs')

test('closest(elm, selector)', function (t) {
  t.assert(closest(doc.querySelectorAll('a')[0], 'nav li:first-child a') != null)
  t.assert(closest(doc.querySelectorAll('a')[3], 'li#fourth a') != null)

  t.assert(closest(doc.querySelector('a'), 'header a') == null)
  t.assert(closest(doc.querySelector('a'), 'a') != null)
  t.assert(closest(doc.querySelector('a'), 'a', true) == null)

  t.assert(closest(doc.querySelector('.nav'), 'div') != null)
  t.assert(closest(doc.querySelector('.nav'), 'div', true) != null)
  t.assert(closest(doc.querySelector('.nav'), 'div', doc.querySelector('nav')) != null)
  t.assert(closest(doc.querySelector('.nav'), 'div', doc.querySelectorAll('div')[1]) != null)
  t.assert(closest(doc.querySelector('.nav'), 'div', doc.querySelector('nav'), true) == null)

  t.end()
})
