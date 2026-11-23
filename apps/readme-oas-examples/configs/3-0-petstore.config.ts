import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/petstore.yaml',
  output: './src/3-0-petstore/routes.ts',
  template: {},
  type: { output: './src/3-0-petstore/types.ts' },
  client: { output: './src/3-0-petstore/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-petstore/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-petstore/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-petstore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-petstore/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-petstore/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-petstore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-petstore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-petstore/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-petstore/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
