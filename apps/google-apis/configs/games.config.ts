import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/games/v1/openapi.yaml',
  output: './src/games/routes.ts',
  docs: {
    output: './src/games/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
