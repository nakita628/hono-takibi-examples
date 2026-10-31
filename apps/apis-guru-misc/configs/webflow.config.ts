import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/webflow.com/2023-03-01T164537Z/openapi.yaml',
  output: './src/webflow/routes.ts',
  docs: {
    output: './src/webflow/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
