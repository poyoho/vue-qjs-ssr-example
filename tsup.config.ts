import { defineConfig } from 'tsup'

export const tsup = defineConfig({
  splitting: false,
  clean: false,
  dts: false,
  target: 'es2020',
  entry: [
    'src/*.ts',
  ],
  format: [
    'esm',
    'cjs',
  ],
},)
