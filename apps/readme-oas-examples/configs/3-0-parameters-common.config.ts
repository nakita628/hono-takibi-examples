import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/parameters-common.yaml',
  output: './src/3-0-parameters-common/routes.ts',
  template: {},
  type: { output: './src/3-0-parameters-common/types.ts' },
  client: { output: './src/3-0-parameters-common/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-parameters-common/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-parameters-common/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-parameters-common/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-parameters-common/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-parameters-common/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-parameters-common/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-parameters-common/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-parameters-common/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-parameters-common/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
