import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/petstore-simple-no-tags.yaml',
  output: './src/3-0-petstore-simple-no-tags/routes.ts',
  template: {},
  type: { output: './src/3-0-petstore-simple-no-tags/types.ts' },
  client: { output: './src/3-0-petstore-simple-no-tags/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-petstore-simple-no-tags/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-petstore-simple-no-tags/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-petstore-simple-no-tags/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-petstore-simple-no-tags/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-petstore-simple-no-tags/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-petstore-simple-no-tags/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-petstore-simple-no-tags/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-petstore-simple-no-tags/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-petstore-simple-no-tags/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
