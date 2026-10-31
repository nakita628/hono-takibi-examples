import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/amadeus-travel-recommendations/1.0.3/openapi.yaml',
  output: './src/amadeus-travel-recommendations/routes.ts',
  docs: {
    output: './src/amadeus-travel-recommendations/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
