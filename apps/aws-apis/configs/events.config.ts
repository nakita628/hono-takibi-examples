import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/events/2015-10-07/openapi.yaml',
  output: './src/events/routes.ts',
  docs: {
    output: './src/events/api.md',
    curl: true,
    baseUrl: 'https://events.us-east-1.amazonaws.com',
  },
})
