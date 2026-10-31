import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/chromemanagement/v1/openapi.yaml',
  output: './src/chromemanagement/routes.ts',
  docs: {
    output: './src/chromemanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
