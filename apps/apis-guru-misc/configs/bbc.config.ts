import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bbc.com/1.0.0/openapi.yaml',
  output: './src/bbc/routes.ts',
  docs: {
    output: './src/bbc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
