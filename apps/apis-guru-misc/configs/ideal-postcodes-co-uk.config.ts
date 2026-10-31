import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ideal-postcodes.co.uk/3.7.0/openapi.yaml',
  output: './src/ideal-postcodes-co-uk/routes.ts',
  docs: {
    output: './src/ideal-postcodes-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
