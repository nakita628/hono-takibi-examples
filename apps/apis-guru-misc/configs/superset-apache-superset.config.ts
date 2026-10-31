import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/superset.apache.local/superset/v1/openapi.yaml',
  output: './src/superset-apache-superset/routes.ts',
  docs: {
    output: './src/superset-apache-superset/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
