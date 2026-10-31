import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/braze.com/1.0.0/openapi.yaml',
  output: './src/braze/routes.ts',
  docs: {
    output: './src/braze/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
