import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Ably Control API v1, official OpenAPI spec.
  // Not wired into generate: the published YAML is invalid (deficient indentation at line 3877).
  // https://github.com/ably/open-specs/blob/98111bb20075c1beba3b66412d0c7791cbd0f168/definitions/control-v1.yaml
  input:
    'https://raw.githubusercontent.com/ably/open-specs/main/definitions/control-v1.yaml',
  output: './src/control/routes.ts',
  docs: {
    output: './src/control/api.md',
    curl: true,
    baseUrl: 'https://control.ably.net/v1',
  },
})
