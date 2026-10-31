import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/chromeuxreport/v1/openapi.yaml',
  output: './src/chromeuxreport/routes.ts',
  docs: {
    output: './src/chromeuxreport/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
