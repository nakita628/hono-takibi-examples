import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/parameters-style.yaml',
  output: './src/3-1-parameters-style/routes.ts',
  template: {},
  type: { output: './src/3-1-parameters-style/types.ts' },
  client: { output: './src/3-1-parameters-style/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-parameters-style/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-parameters-style/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-parameters-style/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-parameters-style/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-parameters-style/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-parameters-style/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-parameters-style/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-parameters-style/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-parameters-style/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
