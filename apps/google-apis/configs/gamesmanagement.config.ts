import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gamesManagement/v1management/openapi.yaml',
  output: './src/gamesmanagement/routes.ts',
  docs: {
    output: './src/gamesmanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
