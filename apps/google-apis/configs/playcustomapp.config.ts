import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/playcustomapp/v1/openapi.yaml',
  output: './src/playcustomapp/routes.ts',
  docs: {
    output: './src/playcustomapp/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
