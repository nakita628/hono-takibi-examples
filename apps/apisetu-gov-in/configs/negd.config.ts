import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/negd/3.0.0/openapi.yaml',
  output: './src/negd/routes.ts',
  docs: {
    output: './src/negd/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
