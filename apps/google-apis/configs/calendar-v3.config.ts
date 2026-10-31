import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/calendar/v3/openapi.yaml',
  output: './src/calendar-v3/routes.ts',
  docs: {
    output: './src/calendar-v3/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com/calendar/v3',
  },
})
