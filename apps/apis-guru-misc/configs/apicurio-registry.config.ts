import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apicurio.local/registry/2.4.x/openapi.yaml',
  output: './src/apicurio-registry/routes.ts',
  docs: {
    output: './src/apicurio-registry/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
