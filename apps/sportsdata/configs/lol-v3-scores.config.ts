import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/lol-v3-scores/1.0/openapi.yaml',
  output: './src/lol-v3-scores/routes.ts',
  docs: {
    output: './src/lol-v3-scores/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
