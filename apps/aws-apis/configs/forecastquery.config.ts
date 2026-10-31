import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/forecastquery/2018-06-26/openapi.yaml',
  output: './src/forecastquery/routes.ts',
  docs: {
    output: './src/forecastquery/api.md',
    curl: true,
    baseUrl: 'https://forecastquery.us-east-1.amazonaws.com',
  },
})
