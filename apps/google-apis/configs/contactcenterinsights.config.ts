import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/contactcenterinsights/v1/openapi.yaml',
  output: './src/contactcenterinsights/routes.ts',
  docs: {
    output: './src/contactcenterinsights/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
