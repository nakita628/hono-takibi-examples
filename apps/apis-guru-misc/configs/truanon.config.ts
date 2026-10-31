import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/truanon.com/1.0.0/openapi.yaml',
  output: './src/truanon/routes.ts',
  docs: {
    output: './src/truanon/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
