import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/graph/1.0.1/openapi.yaml',
  output: './src/microsoft-graph/routes.ts',
  docs: {
    output: './src/microsoft-graph/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
