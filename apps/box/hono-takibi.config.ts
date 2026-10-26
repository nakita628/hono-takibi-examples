import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // box/box-openapi
  input: 'https://raw.githubusercontent.com/box/box-openapi/main/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.box.com/2.0',
  },
})
