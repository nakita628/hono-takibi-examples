import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/keycloak.local/1/openapi.yaml',
  output: './src/keycloak/routes.ts',
  docs: {
    output: './src/keycloak/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
