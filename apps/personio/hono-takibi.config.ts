import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Personio Personnel Data API, official OpenAPI spec:
  // https://github.com/personio/api-docs/blob/8c67d6e762b8ea4391da7d21f76a9b289420c332/personio-personnel-data-api-oa3.yaml
  input: 'https://raw.githubusercontent.com/personio/api-docs/master/personio-personnel-data-api-oa3.yaml',
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
    baseUrl: 'https://api.personio.de/v1',
  },
})
