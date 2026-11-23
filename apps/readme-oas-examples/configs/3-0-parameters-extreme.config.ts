import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/parameters-extreme.yaml',
  output: './src/3-0-parameters-extreme/routes.ts',
  template: {},
  type: { output: './src/3-0-parameters-extreme/types.ts' },
  client: { output: './src/3-0-parameters-extreme/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-parameters-extreme/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-parameters-extreme/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-parameters-extreme/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-parameters-extreme/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-parameters-extreme/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-parameters-extreme/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-parameters-extreme/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-parameters-extreme/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-parameters-extreme/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
