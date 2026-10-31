import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fec.gov/1.0/openapi.yaml',
  output: './src/fec-gov/routes.ts',
  docs: {
    output: './src/fec-gov/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
