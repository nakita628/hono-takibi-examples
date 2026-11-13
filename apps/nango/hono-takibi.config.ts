import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Nango API, official OpenAPI spec:
  // https://github.com/NangoHQ/nango/blob/23552322ece44f817f224ce81b66d1a18b18bc2b/docs/spec.yaml
  input: 'https://raw.githubusercontent.com/NangoHQ/nango/master/docs/spec.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.nango.dev',
  },
})
