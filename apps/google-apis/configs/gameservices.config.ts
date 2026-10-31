import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gameservices/v1/openapi.yaml',
  output: './src/gameservices/routes.ts',
  docs: {
    output: './src/gameservices/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
