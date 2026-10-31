import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/velopayments.com/2.34.63/openapi.yaml',
  output: './src/velopayments/routes.ts',
  docs: {
    output: './src/velopayments/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
