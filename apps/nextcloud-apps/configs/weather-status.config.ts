import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/weather_status/openapi.json',
  output: './src/weather-status/routes.ts',
  docs: {
    output: './src/weather-status/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
