import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/nimble/2020-08-01/openapi.yaml',
  output: './src/nimble/routes.ts',
  docs: {
    output: './src/nimble/api.md',
    curl: true,
    baseUrl: 'https://nimble.us-east-1.amazonaws.com',
  },
})
