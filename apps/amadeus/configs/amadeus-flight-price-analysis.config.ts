import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/amadeus-flight-price-analysis/1.0.1/openapi.yaml',
  output: './src/amadeus-flight-price-analysis/routes.ts',
  docs: {
    output: './src/amadeus-flight-price-analysis/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
