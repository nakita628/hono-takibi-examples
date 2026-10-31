import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/discourse.local/latest/openapi.yaml',
  output: './src/discourse/routes.ts',
  docs: {
    output: './src/discourse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
