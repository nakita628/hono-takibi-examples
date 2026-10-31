import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/androidmanagement/v1/openapi.yaml',
  output: './src/androidmanagement/routes.ts',
  docs: {
    output: './src/androidmanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
