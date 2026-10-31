import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/discovery/v1/openapi.yaml',
  output: './src/discovery/routes.ts',
  docs: {
    output: './src/discovery/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
