import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/here.com/tracking/2.1.191/openapi.yaml',
  output: './src/here-tracking/routes.ts',
  docs: {
    output: './src/here-tracking/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
