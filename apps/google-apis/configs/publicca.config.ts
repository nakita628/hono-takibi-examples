import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/publicca/v1beta1/openapi.yaml',
  output: './src/publicca/routes.ts',
  docs: {
    output: './src/publicca/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
