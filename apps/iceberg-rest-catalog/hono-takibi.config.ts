import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Apache Iceberg REST Catalog API, official OpenAPI spec:
  // https://github.com/apache/iceberg/blob/1744d5a23811674aba03ab3656ff7baa2fa5c519/open-api/rest-catalog-open-api.yaml
  // Not generated: js-yaml rejects a flow mapping whose closing brace sits at its parent key's indentation
  // (line 210, "deficient indentation"). PyYAML reads the same file.
  input: 'https://raw.githubusercontent.com/apache/iceberg/main/open-api/rest-catalog-open-api.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:8181',
  },
})
