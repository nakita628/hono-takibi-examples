import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/amp/2020-08-01/openapi.yaml',
  output: './src/amp/routes.ts',
  docs: {
    output: './src/amp/api.md',
    curl: true,
    baseUrl: 'https://amp.us-east-1.amazonaws.com',
  },
})
