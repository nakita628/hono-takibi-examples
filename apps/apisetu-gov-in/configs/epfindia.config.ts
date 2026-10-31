import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/epfindia/3.0.0/openapi.yaml',
  output: './src/epfindia/routes.ts',
  docs: {
    output: './src/epfindia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
