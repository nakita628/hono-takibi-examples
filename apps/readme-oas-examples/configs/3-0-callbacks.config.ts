import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/callbacks.yaml',
  output: './src/3-0-callbacks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-callbacks/types.ts' },
  client: { output: './src/3-0-callbacks/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-callbacks/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-callbacks/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-callbacks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-callbacks/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-callbacks/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-callbacks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-callbacks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-callbacks/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-callbacks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
