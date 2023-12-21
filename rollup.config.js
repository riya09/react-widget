import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import cssnano from 'cssnano';

export default {
  input: './src/widget.js',
  output: [
    {
      file: './package/component/index.js',
      format: 'cjs'
    },
  ],
  plugins: [
    external(),
    postcss({
      extract: 'index.css',
      plugins: [cssnano()]
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    terser(),
  ]
};
