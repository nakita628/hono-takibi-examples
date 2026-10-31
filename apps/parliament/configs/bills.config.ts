import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/bills/v1/openapi.yaml',
  output: './src/bills/routes.ts',
  docs: {
    output: './src/bills/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
