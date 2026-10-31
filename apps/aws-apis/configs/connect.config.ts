import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/connect/2017-08-08/openapi.yaml',
  output: './src/connect/routes.ts',
  docs: {
    output: './src/connect/api.md',
    curl: true,
    baseUrl: 'https://connect.us-east-1.amazonaws.com',
  },
})
