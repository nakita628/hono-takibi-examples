import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vectara.io/1.0.0/openapi.yaml',
  output: './src/vectara-io/routes.ts',
  docs: {
    output: './src/vectara-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
