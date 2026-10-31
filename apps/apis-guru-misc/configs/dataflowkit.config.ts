import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/dataflowkit.com/1.3/openapi.yaml',
  output: './src/dataflowkit/routes.ts',
  docs: {
    output: './src/dataflowkit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
