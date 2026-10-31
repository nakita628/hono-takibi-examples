import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/amadeus-location-score/1.0.2/openapi.yaml',
  output: './src/amadeus-location-score/routes.ts',
  docs: {
    output: './src/amadeus-location-score/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
