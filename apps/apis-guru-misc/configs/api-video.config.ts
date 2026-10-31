import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/api.video/1/openapi.yaml',
  output: './src/api-video/routes.ts',
  docs: {
    output: './src/api-video/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
