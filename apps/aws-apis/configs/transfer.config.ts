import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/transfer/2018-11-05/openapi.yaml',
  output: './src/transfer/routes.ts',
  docs: {
    output: './src/transfer/api.md',
    curl: true,
    baseUrl: 'https://transfer.us-east-1.amazonaws.com',
  },
})
