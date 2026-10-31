import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/presalytics.io/story/0.3.1/openapi.yaml',
  output: './src/presalytics-io-story/routes.ts',
  docs: {
    output: './src/presalytics-io-story/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
