import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/nba-v3-rotoballer-articles/1.0/openapi.yaml',
  output: './src/nba-v3-rotoballer-articles/routes.ts',
  docs: {
    output: './src/nba-v3-rotoballer-articles/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
