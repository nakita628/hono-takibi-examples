import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api-docs.render.com/openapi/render-public-api-1.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.render.com/v1',
  },
})
