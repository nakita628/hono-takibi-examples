import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/redeal.io/1.0.0/openapi.yaml',
  output: './src/redeal-io/routes.ts',
  docs: {
    output: './src/redeal-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
