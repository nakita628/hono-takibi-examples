import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/2.2.0/openapi.yaml',
  output: './src/amadeus/routes.ts',
  docs: {
    output: './src/amadeus/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
