import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zuora.com/2021-08-20/openapi.yaml',
  output: './src/zuora/routes.ts',
  docs: {
    output: './src/zuora/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
