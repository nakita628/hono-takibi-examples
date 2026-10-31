import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sql/v1beta4/openapi.yaml',
  output: './src/sql/routes.ts',
  docs: {
    output: './src/sql/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
