import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Unity Catalog API, official OpenAPI spec:
  // https://github.com/unitycatalog/unitycatalog/blob/dcec3cfff1bb58147198cce64e4c2a036a67f742/api/all.yaml
  input: 'https://raw.githubusercontent.com/unitycatalog/unitycatalog/main/api/all.yaml',
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
    baseUrl: 'http://localhost:8080/api/2.1/unity-catalog',
  },
})
