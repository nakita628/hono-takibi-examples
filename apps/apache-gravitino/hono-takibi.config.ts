import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Apache Gravitino REST API, official OpenAPI spec:
  // https://github.com/apache/gravitino/blob/4019c7244c3658d7bd1fa9f845bfc05cb495281a/docs/open-api/openapi.yaml
  // Not generated: js-yaml rejects a flow mapping whose closing brace sits at its parent key's indentation
  // (line 447, "deficient indentation"). PyYAML reads the same file.
  input: 'https://raw.githubusercontent.com/apache/gravitino/main/docs/open-api/openapi.yaml',
  output: './src/routes.ts',
  template: { routeHandler: true },
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
    baseUrl: 'http://localhost:8090/api',
  },
})
