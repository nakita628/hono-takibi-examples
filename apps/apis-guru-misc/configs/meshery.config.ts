import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/meshery.local/0.4.27/openapi.yaml',
  output: './src/meshery/routes.ts',
  docs: {
    output: './src/meshery/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
