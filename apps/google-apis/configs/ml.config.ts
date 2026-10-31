import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/ml/v1/openapi.yaml',
  output: './src/ml/routes.ts',
  docs: {
    output: './src/ml/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
