import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Portainer CE API, official OpenAPI spec:
  // https://github.com/portainer/portainer/blob/2d1ea91625bfc572c7a57432547a787c498d9a26/api/docs/openapi.yaml
  input:
    'https://raw.githubusercontent.com/portainer/portainer/release/2.45/api/docs/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://localhost:9443/api',
  },
})
