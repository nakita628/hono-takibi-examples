import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Kintone REST API: https://github.com/kintone/openapi-spec (bundled single file)
  input: 'https://raw.githubusercontent.com/kintone/openapi-spec/main/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://example.cybozu.com',
  },
})
