import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/geodatasource.com/1.0/openapi.yaml',
  output: './src/geodatasource/routes.ts',
  docs: {
    output: './src/geodatasource/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
