import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Apache Iceberg REST Catalog API, official OpenAPI spec:
  // https://github.com/apache/iceberg/blob/1744d5a23811674aba03ab3656ff7baa2fa5c519/open-api/rest-catalog-open-api.yaml
  // Not generated: js-yaml rejects a flow mapping whose closing brace sits at its parent key's indentation
  // (line 210, "deficient indentation"). PyYAML reads the same file.
  input: 'https://raw.githubusercontent.com/apache/iceberg/main/open-api/rest-catalog-open-api.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:8181',
  },
})
