import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/digitalassetlinks/v1/openapi.yaml',
  output: './src/digitalassetlinks/routes.ts',
  docs: {
    output: './src/digitalassetlinks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
