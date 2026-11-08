import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Kong Gateway open-source Admin API 3.9, official OpenAPI spec:
  // https://github.com/Kong/developer.konghq.com/blob/7aacb8e9dd6049edbed26756ce0b84546b5a974c/api-specs/gateway/admin-oss/3.9/openapi.yaml
  input:
    'https://raw.githubusercontent.com/Kong/developer.konghq.com/main/api-specs/gateway/admin-oss/3.9/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:8001',
  },
})
