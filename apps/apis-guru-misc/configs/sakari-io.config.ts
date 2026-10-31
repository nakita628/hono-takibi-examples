import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sakari.io/1.0.1/openapi.yaml',
  output: './src/sakari-io/routes.ts',
  docs: {
    output: './src/sakari-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
