import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/corrently.io/2.0.0/openapi.yaml',
  output: './src/corrently-io/routes.ts',
  docs: {
    output: './src/corrently-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
