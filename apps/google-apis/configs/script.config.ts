import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/script/v1/openapi.yaml',
  output: './src/script/routes.ts',
  docs: {
    output: './src/script/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
