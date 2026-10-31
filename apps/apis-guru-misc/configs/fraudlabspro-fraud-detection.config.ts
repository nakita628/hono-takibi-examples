import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fraudlabspro.com/fraud-detection/1.1/openapi.yaml',
  output: './src/fraudlabspro-fraud-detection/routes.ts',
  docs: {
    output: './src/fraudlabspro-fraud-detection/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
