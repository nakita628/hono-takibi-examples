import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tafqit.herokuapp.com/v1/openapi.yaml',
  output: './src/tafqit-herokuapp/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/tafqit-herokuapp/types.ts' },
  client: { output: './src/tafqit-herokuapp/client.ts', baseUrl: '/' },
  rpc: { output: './src/tafqit-herokuapp/rpc.ts', parseResponse: true },
  swr: { output: './src/tafqit-herokuapp/hooks/swr.ts' },
  'tanstack-query': { output: './src/tafqit-herokuapp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tafqit-herokuapp/hooks/preact-query.ts' },
  'solid-query': { output: './src/tafqit-herokuapp/hooks/solid-query.ts' },
  'vue-query': { output: './src/tafqit-herokuapp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tafqit-herokuapp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tafqit-herokuapp/hooks/angular-query.ts' },
  docs: {
    output: './src/tafqit-herokuapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
