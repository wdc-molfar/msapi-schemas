import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from '../../package.json';
import json from "@rollup/plugin-json"
import { terser } from 'rollup-plugin-terser';

const banner = {
  banner() {
    return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.repository} @license ${pkg.license} */`;
  }
}

const plugins = [ 
  nodeResolve(), 
  json(),
  commonjs({
    dynamicRequireTargets: [
      // include using a glob pattern (either a string or an array of strings)
      './schemas/json/*.schema.json'
    ]
  }), 
  banner 
];

const umd_out_base = { format: 'umd', name: 'msapischemas', exports: 'named' };

export default [
  // es5
  {
    input: 'index.js',
    output: [
      { ...umd_out_base, file: 'dist/msapi-schemas.js' },
      { ...umd_out_base, file: 'dist/msapi-schemas.min.js', plugins: [ terser() ] }
    ],
    plugins
  },
  // esm
  {
    input: 'index.js',
    output: [
      { format: 'esm', file: 'dist/msapi-schemas.mjs' },
    ],
    plugins
  }
];
