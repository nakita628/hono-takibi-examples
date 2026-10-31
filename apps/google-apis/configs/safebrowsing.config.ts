import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/safebrowsing/v4/openapi.yaml',
  output: './src/safebrowsing/routes.ts',
  docs: {
    output: './src/safebrowsing/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
