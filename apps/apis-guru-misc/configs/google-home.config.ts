import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/google.home/2.0/openapi.yaml',
  output: './src/google-home/routes.ts',
  docs: {
    output: './src/google-home/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
