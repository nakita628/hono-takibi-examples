import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/d7networks.com/1.0.2/openapi.yaml',
  output: './src/d7networks/routes.ts',
  docs: {
    output: './src/d7networks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
