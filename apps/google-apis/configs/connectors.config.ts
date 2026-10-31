import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/connectors/v2/openapi.yaml',
  output: './src/connectors/routes.ts',
  docs: {
    output: './src/connectors/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
