import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/domainsrdap/v1/openapi.yaml',
  output: './src/domainsrdap/routes.ts',
  docs: {
    output: './src/domainsrdap/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
