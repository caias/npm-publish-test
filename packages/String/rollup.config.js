import path from 'path';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const extensions = ['.js'];
const excludePath = 'node_modules/**';
const defaultOutputOption = {
  name: 'String',
  exports: 'named',
}

export default {
  input: './index.js',
  output: [
    {
      ...defaultOutputOption,
      format: 'es',
      file: pkg.module,
    },
    {
      ...defaultOutputOption,
      format: 'cjs',
      file: pkg.main,
    },
    {
      ...defaultOutputOption,
      format: 'umd',
      file: pkg.browser,
    },
  ],
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
      babelHelpers: 'runtime',
      exclude: excludePath,
      extensions,
    }),
  ],
};