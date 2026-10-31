import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/licensing/v1/openapi.yaml',
  output: './src/licensing/routes.ts',
  docs: {
    output: './src/licensing/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
