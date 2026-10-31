import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/gwells/v1/openapi.yaml',
  output: './src/gwells/routes.ts',
  docs: {
    output: './src/gwells/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
