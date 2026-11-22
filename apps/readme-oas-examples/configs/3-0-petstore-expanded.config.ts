import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/petstore-expanded.yaml',
  output: './src/3-0-petstore-expanded/routes.ts',
  template: {},
  type: { output: './src/3-0-petstore-expanded/types.ts' },
  client: { output: './src/3-0-petstore-expanded/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-petstore-expanded/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-petstore-expanded/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-petstore-expanded/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-petstore-expanded/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-petstore-expanded/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-petstore-expanded/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-petstore-expanded/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-petstore-expanded/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-petstore-expanded/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
