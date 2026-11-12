import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Inngest API v1, official OpenAPI spec:
  // https://github.com/inngest/inngest/blob/ff6ab644729a23bb32ed1858e36539533478e09c/docs/openapi/v3/api/v1/spec.yaml
  input:
    'https://raw.githubusercontent.com/inngest/inngest/main/docs/openapi/v3/api/v1/spec.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.inngest.com',
  },
})
