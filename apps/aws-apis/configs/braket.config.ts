import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/braket/2019-09-01/openapi.yaml',
  output: './src/braket/routes.ts',
  docs: {
    output: './src/braket/api.md',
    curl: true,
    baseUrl: 'https://braket.us-east-1.amazonaws.com',
  },
})
