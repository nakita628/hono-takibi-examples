import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/honeycode/2020-03-01/openapi.yaml',
  output: './src/honeycode/routes.ts',
  docs: {
    output: './src/honeycode/api.md',
    curl: true,
    baseUrl: 'https://honeycode.us-east-1.amazonaws.com',
  },
})
