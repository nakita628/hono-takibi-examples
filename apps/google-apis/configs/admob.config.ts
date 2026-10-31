import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/admob/v1beta/openapi.yaml',
  output: './src/admob/routes.ts',
  docs: {
    output: './src/admob/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
