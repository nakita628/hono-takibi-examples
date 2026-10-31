import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/domainsdb.info/1.0/openapi.yaml',
  output: './src/domainsdb-info/routes.ts',
  docs: {
    output: './src/domainsdb-info/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
