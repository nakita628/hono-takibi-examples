import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/synthetics/2017-10-11/openapi.yaml',
  output: './src/synthetics/routes.ts',
  docs: {
    output: './src/synthetics/api.md',
    curl: true,
    baseUrl: 'https://synthetics.us-east-1.amazonaws.com',
  },
})
