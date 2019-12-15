import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript';

const plugins = [
  typescript(),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    rootMode: 'upward'
  })
]

export default [
  {
    input: 'src/index.tsx',
    plugins,
    output: {
      file: `dist/index.js`,
      format: 'esm'
    }
  }
]
