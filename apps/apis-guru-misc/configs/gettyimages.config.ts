import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gettyimages.com/3/openapi.yaml',
  output: './src/gettyimages/routes.ts',
  docs: {
    output: './src/gettyimages/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
