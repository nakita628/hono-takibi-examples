import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/spanner/v1/openapi.yaml',
  output: './src/spanner/routes.ts',
  docs: {
    output: './src/spanner/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
