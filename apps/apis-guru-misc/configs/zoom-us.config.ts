import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zoom.us/2.0.0/openapi.yaml',
  output: './src/zoom-us/routes.ts',
  docs: {
    output: './src/zoom-us/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
