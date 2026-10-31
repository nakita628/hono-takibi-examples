import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/customer-profiles/2020-08-15/openapi.yaml',
  output: './src/customer-profiles/routes.ts',
  docs: {
    output: './src/customer-profiles/api.md',
    curl: true,
    baseUrl: 'https://customer-profiles.us-east-1.amazonaws.com',
  },
})
