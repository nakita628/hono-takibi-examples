import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/seldon.local/core/0.1/openapi.yaml',
  output: './src/seldon-core/routes.ts',
  docs: {
    output: './src/seldon-core/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
