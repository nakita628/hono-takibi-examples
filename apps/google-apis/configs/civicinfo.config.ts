import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/civicinfo/v2/openapi.yaml',
  output: './src/civicinfo/routes.ts',
  docs: {
    output: './src/civicinfo/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
