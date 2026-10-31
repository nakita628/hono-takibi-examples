import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/amadeus-trip-parser/3.0.1/openapi.yaml',
  output: './src/amadeus-trip-parser/routes.ts',
  docs: {
    output: './src/amadeus-trip-parser/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
