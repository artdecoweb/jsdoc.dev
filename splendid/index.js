import { join } from 'path'

const APP_DIR = 'splendid'
const BUILD_DIR = 'docs'

/** @type {import('splendid').Config} */
const config = {
  appDir: APP_DIR,
  layout: join(APP_DIR, 'layout/main.html'),
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[JSDOC.dev](https://jsdoc.dev)',
    },
  ],
  output: BUILD_DIR,
  url: 'https://jsdoc.dev',
}

export default config