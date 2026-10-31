import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apigee.local/registry/0.0.1/openapi.yaml',
  output: './src/apigee-registry/routes.ts',
  docs: {
    output: './src/apigee-registry/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
