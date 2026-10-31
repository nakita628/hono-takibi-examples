import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/androidenterprise/v1/openapi.yaml',
  output: './src/androidenterprise/routes.ts',
  docs: {
    output: './src/androidenterprise/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
