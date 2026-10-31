import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/groundhog-day.com/1.2.1/openapi.yaml',
  output: './src/groundhog-day/routes.ts',
  docs: {
    output: './src/groundhog-day/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
