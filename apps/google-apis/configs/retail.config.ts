import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/retail/v2alpha/openapi.yaml',
  output: './src/retail/routes.ts',
  docs: {
    output: './src/retail/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
