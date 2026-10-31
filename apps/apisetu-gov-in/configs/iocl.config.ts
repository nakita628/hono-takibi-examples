import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/iocl/3.0.0/openapi.yaml',
  output: './src/iocl/routes.ts',
  docs: {
    output: './src/iocl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
