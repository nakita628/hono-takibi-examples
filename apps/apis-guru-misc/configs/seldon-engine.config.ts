import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/seldon.local/engine/0.1/openapi.yaml',
  output: './src/seldon-engine/routes.ts',
  docs: {
    output: './src/seldon-engine/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
