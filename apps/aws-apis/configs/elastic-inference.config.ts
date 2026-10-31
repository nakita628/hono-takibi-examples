import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elastic-inference/2017-07-25/openapi.yaml',
  output: './src/elastic-inference/routes.ts',
  docs: {
    output: './src/elastic-inference/api.md',
    curl: true,
    baseUrl: 'https://elastic-inference.us-east-1.amazonaws.com',
  },
})
