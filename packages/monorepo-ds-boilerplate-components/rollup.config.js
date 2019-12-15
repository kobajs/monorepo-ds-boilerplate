import babel from 'rollup-plugin-babel'

const plugins = [
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
