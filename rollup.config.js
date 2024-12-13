import vue from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',  // Arquivo de entrada (substitua pelo caminho correto)
  output: [
    {
      file: 'dist/gustavo-design-system-v2.cjs.js',
      format: 'cjs',  // Formato CommonJS
      exports: 'named'
    },
    {
      file: 'dist/gustavo-design-system-v2.esm.js',
      format: 'es',  // Formato ES Module
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    vue(),  // Plugin Vue para processar arquivos .vue
    terser() // Plugin Terser para minificação
  ],
  external: ['vue'] // Exclui o Vue do bundle final
};
