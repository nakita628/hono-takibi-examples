import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/iap/v1beta1/openapi.yaml',
  output: './src/iap/routes.ts',
  docs: {
    output: './src/iap/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
