import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/storagegateway/2013-06-30/openapi.yaml',
  output: './src/storagegateway/routes.ts',
  docs: {
    output: './src/storagegateway/api.md',
    curl: true,
    baseUrl: 'https://storagegateway.us-east-1.amazonaws.com',
  },
})
