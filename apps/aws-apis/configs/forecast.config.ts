import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/forecast/2018-06-26/openapi.yaml',
  output: './src/forecast/routes.ts',
  docs: {
    output: './src/forecast/api.md',
    curl: true,
    baseUrl: 'https://forecast.us-east-1.amazonaws.com',
  },
})
