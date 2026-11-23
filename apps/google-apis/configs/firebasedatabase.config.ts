import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebasedatabase/v1beta/openapi.yaml',
  output: './src/firebasedatabase/routes.ts',
  template: {},
  type: { output: './src/firebasedatabase/types.ts' },
  client: { output: './src/firebasedatabase/client.ts', baseUrl: '/' },
  rpc: { output: './src/firebasedatabase/rpc.ts', parseResponse: true },
  swr: { output: './src/firebasedatabase/hooks/swr.ts' },
  'tanstack-query': { output: './src/firebasedatabase/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firebasedatabase/hooks/preact-query.ts' },
  'solid-query': { output: './src/firebasedatabase/hooks/solid-query.ts' },
  'vue-query': { output: './src/firebasedatabase/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firebasedatabase/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firebasedatabase/hooks/angular-query.ts' },
  docs: {
    output: './src/firebasedatabase/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
