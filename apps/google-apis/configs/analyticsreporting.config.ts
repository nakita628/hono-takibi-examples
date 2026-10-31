import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/analyticsreporting/v4/openapi.yaml',
  output: './src/analyticsreporting/routes.ts',
  docs: {
    output: './src/analyticsreporting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
