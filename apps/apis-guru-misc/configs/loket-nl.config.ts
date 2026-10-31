import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/loket.nl/V2/openapi.yaml',
  output: './src/loket-nl/routes.ts',
  docs: {
    output: './src/loket-nl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
