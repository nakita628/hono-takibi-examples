import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/peoplegeneratorapi.live/v0/openapi.yaml',
  output: './src/peoplegeneratorapi-live/routes.ts',
  docs: {
    output: './src/peoplegeneratorapi-live/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
