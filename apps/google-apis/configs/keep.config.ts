import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/keep/v1/openapi.yaml',
  output: './src/keep/routes.ts',
  docs: {
    output: './src/keep/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
