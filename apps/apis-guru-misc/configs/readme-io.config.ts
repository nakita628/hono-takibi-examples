import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/readme.io/2.0.0/openapi.yaml',
  output: './src/readme-io/routes.ts',
  docs: {
    output: './src/readme-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
