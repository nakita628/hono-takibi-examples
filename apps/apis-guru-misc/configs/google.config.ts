import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/google.com/v3/openapi.yaml',
  output: './src/google/routes.ts',
  docs: {
    output: './src/google/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
