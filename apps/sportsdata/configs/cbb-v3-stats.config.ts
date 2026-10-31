import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/cbb-v3-stats/1.0/openapi.yaml',
  output: './src/cbb-v3-stats/routes.ts',
  docs: {
    output: './src/cbb-v3-stats/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
