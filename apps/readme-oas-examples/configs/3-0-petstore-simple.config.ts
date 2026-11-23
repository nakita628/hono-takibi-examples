import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/petstore-simple.yaml',
  output: './src/3-0-petstore-simple/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-petstore-simple/types.ts' },
  client: { output: './src/3-0-petstore-simple/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-petstore-simple/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-petstore-simple/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-petstore-simple/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-petstore-simple/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-petstore-simple/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-petstore-simple/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-petstore-simple/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-petstore-simple/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-petstore-simple/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
