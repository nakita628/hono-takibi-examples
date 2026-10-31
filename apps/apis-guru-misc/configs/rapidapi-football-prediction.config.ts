import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rapidapi.com/football-prediction/2/openapi.yaml',
  output: './src/rapidapi-football-prediction/routes.ts',
  docs: {
    output: './src/rapidapi-football-prediction/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
