import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicemanagement/v1/openapi.yaml',
  output: './src/servicemanagement/routes.ts',
  docs: {
    output: './src/servicemanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
