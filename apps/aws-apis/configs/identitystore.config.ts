import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/identitystore/2020-06-15/openapi.yaml',
  output: './src/identitystore/routes.ts',
  docs: {
    output: './src/identitystore/api.md',
    curl: true,
    baseUrl: 'https://identitystore.us-east-1.amazonaws.com',
  },
})
