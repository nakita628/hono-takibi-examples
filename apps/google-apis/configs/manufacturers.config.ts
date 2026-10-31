import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/manufacturers/v1/openapi.yaml',
  output: './src/manufacturers/routes.ts',
  docs: {
    output: './src/manufacturers/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
