import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/enibandhanjh/3.0.0/openapi.yaml',
  output: './src/enibandhanjh/routes.ts',
  docs: {
    output: './src/enibandhanjh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
