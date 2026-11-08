import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // HashiCorp Nomad HTTP API, official OpenAPI spec:
  // https://github.com/hashicorp/nomad-openapi/blob/91c4cd105ec4a5347c633633361249fb63de6391/v1/openapi.yaml
  input:
    'https://raw.githubusercontent.com/hashicorp/nomad-openapi/main/v1/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://127.0.0.1:4646/v1',
  },
})
