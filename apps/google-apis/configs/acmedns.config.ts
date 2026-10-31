import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/acmedns/v1/openapi.yaml',
  output: './src/acmedns/routes.ts',
  docs: {
    output: './src/acmedns/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
