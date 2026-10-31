import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/visualcrossing.com/weather/4.6/openapi.yaml',
  output: './src/visualcrossing-weather/routes.ts',
  docs: {
    output: './src/visualcrossing-weather/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
