import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ram/2018-01-04/openapi.yaml',
  output: './src/ram/routes.ts',
  docs: {
    output: './src/ram/api.md',
    curl: true,
    baseUrl: 'https://ram.us-east-1.amazonaws.com',
  },
})
