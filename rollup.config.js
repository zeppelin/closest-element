import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/closest.js',
  moduleName: 'closest',

  plugins: [
    buble(),
    nodeResolve({ jsnext: true, browser: true }),
    commonjs({ include: 'node_modules/**' })
  ],

  sourceMap: true,

  targets: [
    { dest: 'dist/closest.cjs.js', format: 'cjs' },
    { dest: 'dist/closest.js', format: 'umd' },
    { dest: 'dist/closest.es6.js', format: 'es6' }
  ]
}
