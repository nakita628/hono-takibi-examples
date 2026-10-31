import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/playablelocations/v3/openapi.yaml',
  output: './src/playablelocations/routes.ts',
  docs: {
    output: './src/playablelocations/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
