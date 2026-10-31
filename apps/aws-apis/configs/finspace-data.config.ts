import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/finspace-data/2020-07-13/openapi.yaml',
  output: './src/finspace-data/routes.ts',
  docs: {
    output: './src/finspace-data/api.md',
    curl: true,
    baseUrl: 'https://finspace-data.us-east-1.amazonaws.com',
  },
})
