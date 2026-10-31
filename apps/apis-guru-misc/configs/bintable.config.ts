import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bintable.com/1.0.0-oas3/openapi.yaml',
  output: './src/bintable/routes.ts',
  docs: {
    output: './src/bintable/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
