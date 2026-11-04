import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // WorkOS REST API, official OpenAPI spec:
  // https://github.com/workos/openapi-spec/blob/main/spec/open-api-spec.yaml
  input:
    'https://raw.githubusercontent.com/workos/openapi-spec/main/spec/open-api-spec.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.workos.com',
  },
})
