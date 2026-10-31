import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sheets/v4/openapi.yaml',
  output: './src/sheets/routes.ts',
  docs: {
    output: './src/sheets/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
