import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/soccer-v3-scores/1.0/openapi.yaml',
  output: './src/soccer-v3-scores/routes.ts',
  docs: {
    output: './src/soccer-v3-scores/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
