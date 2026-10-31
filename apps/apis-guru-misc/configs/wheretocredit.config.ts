import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wheretocredit.com/1.0/openapi.yaml',
  output: './src/wheretocredit/routes.ts',
  docs: {
    output: './src/wheretocredit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
