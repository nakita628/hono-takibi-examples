import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wordnik.com/4.0/openapi.yaml',
  output: './src/wordnik/routes.ts',
  docs: {
    output: './src/wordnik/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
