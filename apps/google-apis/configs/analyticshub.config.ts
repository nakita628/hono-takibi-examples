import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/analyticshub/v1/openapi.yaml',
  output: './src/analyticshub/routes.ts',
  docs: {
    output: './src/analyticshub/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
