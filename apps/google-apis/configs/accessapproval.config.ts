import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/accessapproval/v1/openapi.yaml',
  output: './src/accessapproval/routes.ts',
  docs: {
    output: './src/accessapproval/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
