import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/calendar/v3/openapi.yaml',
  output: './src/calendar/routes.ts',
  docs: {
    output: './src/calendar/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
