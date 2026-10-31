import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hptechboard/3.0.0/openapi.yaml',
  output: './src/hptechboard/routes.ts',
  docs: {
    output: './src/hptechboard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
