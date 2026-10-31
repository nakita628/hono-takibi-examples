import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/health/2016-08-04/openapi.yaml',
  output: './src/health/routes.ts',
  docs: {
    output: './src/health/api.md',
    curl: true,
    baseUrl: 'https://health.us-east-1.amazonaws.com',
  },
})
