import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/androidpublisher/v3/openapi.yaml',
  output: './src/androidpublisher/routes.ts',
  docs: {
    output: './src/androidpublisher/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
