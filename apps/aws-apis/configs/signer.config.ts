import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/signer/2017-08-25/openapi.yaml',
  output: './src/signer/routes.ts',
  docs: {
    output: './src/signer/api.md',
    curl: true,
    baseUrl: 'https://signer.us-east-1.amazonaws.com',
  },
})
