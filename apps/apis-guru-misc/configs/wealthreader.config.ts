import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wealthreader.com/1.0.0/openapi.yaml',
  output: './src/wealthreader/routes.ts',
  docs: {
    output: './src/wealthreader/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
