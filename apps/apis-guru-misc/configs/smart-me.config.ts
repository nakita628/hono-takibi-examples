import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/smart-me.com/v1/openapi.yaml',
  output: './src/smart-me/routes.ts',
  docs: {
    output: './src/smart-me/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
