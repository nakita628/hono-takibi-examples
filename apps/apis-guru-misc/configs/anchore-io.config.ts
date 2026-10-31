import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/anchore.io/0.1.20/openapi.yaml',
  output: './src/anchore-io/routes.ts',
  docs: {
    output: './src/anchore-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
