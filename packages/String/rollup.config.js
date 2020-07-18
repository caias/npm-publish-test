import path from 'path';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const extensions = ['.js'];
const excludePath = 'node_modules/**';

export default {
  input: './index.js',
  output: {
    format: 'es',
    name: 'String',
    file: pkg.module,
  },
  plugins: [
    alias({
      resolve: ['', '.js'],
      entries: [
        {
          find: '_js', replacement: path.resolve(__dirname, 'src/js'),
        },
      ],
    }),
    commonjs(),
    resolve({
      preferBuiltins: false,
      extensions,
    }),
    babel({
      presets: [
        '@babel/env',
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
      ],
      babelHelpers: 'runtime',
      exclude: excludePath,
      extensions,
    }),
  ],
};