import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/finspace/2021-03-12/openapi.yaml',
  output: './src/finspace/routes.ts',
  docs: {
    output: './src/finspace/api.md',
    curl: true,
    baseUrl: 'https://finspace.us-east-1.amazonaws.com',
  },
})
