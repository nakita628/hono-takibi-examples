import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/firmalyzer.com/iotvas/1.0/openapi.yaml',
  output: './src/firmalyzer-iotvas/routes.ts',
  docs: {
    output: './src/firmalyzer-iotvas/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
