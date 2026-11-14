import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Modern Treasury API, official OpenAPI spec:
  // https://github.com/Modern-Treasury/modern-treasury-openapi/blob/bf82875bae88b66c639b8b1b0b26a04add87b668/openapi/mt_openapi_spec_v1.yaml
  input: 'https://raw.githubusercontent.com/Modern-Treasury/modern-treasury-openapi/main/openapi/mt_openapi_spec_v1.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://app.moderntreasury.com',
  },
})
