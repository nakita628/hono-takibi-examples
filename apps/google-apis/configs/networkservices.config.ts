import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/networkservices/v1beta1/openapi.yaml',
  output: './src/networkservices/routes.ts',
  docs: {
    output: './src/networkservices/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
