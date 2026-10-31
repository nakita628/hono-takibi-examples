import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/webscraping.ai/2.0.7/openapi.yaml',
  output: './src/webscraping-ai/routes.ts',
  docs: {
    output: './src/webscraping-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
