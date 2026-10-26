import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Keycloak Admin REST API
  input: 'https://www.keycloak.org/docs-api/latest/rest-api/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://keycloak.example.com',
  },
})
