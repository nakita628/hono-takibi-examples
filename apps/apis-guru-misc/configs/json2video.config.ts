import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/json2video.com/2.0.0/openapi.yaml',
  output: './src/json2video/routes.ts',
  docs: {
    output: './src/json2video/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
