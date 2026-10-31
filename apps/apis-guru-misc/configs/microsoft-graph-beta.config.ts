import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/graph-beta/1.0.1/openapi.yaml',
  output: './src/microsoft-graph-beta/routes.ts',
  docs: {
    output: './src/microsoft-graph-beta/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
