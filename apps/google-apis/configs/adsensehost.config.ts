import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adsensehost/v4.1/openapi.yaml',
  output: './src/adsensehost/routes.ts',
  docs: {
    output: './src/adsensehost/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
