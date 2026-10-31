import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/savingsplans/2019-06-28/openapi.yaml',
  output: './src/savingsplans/routes.ts',
  docs: {
    output: './src/savingsplans/api.md',
    curl: true,
    baseUrl: 'https://savingsplans.us-east-1.amazonaws.com',
  },
})
