import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/notebooks/v2/openapi.yaml',
  output: './src/notebooks/routes.ts',
  docs: {
    output: './src/notebooks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
