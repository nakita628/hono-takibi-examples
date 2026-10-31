import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/geo_api/1.0.0/openapi.yaml',
  output: './src/geo-api/routes.ts',
  docs: {
    output: './src/geo-api/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
