import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/nhl-v3-stats/1.0/openapi.yaml',
  output: './src/nhl-v3-stats/routes.ts',
  docs: {
    output: './src/nhl-v3-stats/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
