import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openbankingproject.ch/1.3.8_2020-12-14 - Swiss edition 1.3.8.1-CH/openapi.yaml',
  output: './src/openbankingproject-ch/routes.ts',
  docs: {
    output: './src/openbankingproject-ch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
