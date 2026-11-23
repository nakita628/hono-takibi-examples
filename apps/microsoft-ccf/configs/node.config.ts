import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoft/CCF/main/doc/schemas/node_openapi.json',
  output: './src/node/routes.ts',
  template: {},
  type: { output: './src/node/types.ts' },
  client: { output: './src/node/client.ts', baseUrl: '/' },
  rpc: { output: './src/node/rpc.ts', parseResponse: true },
  swr: { output: './src/node/hooks/swr.ts' },
  'tanstack-query': { output: './src/node/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/node/hooks/preact-query.ts' },
  'solid-query': { output: './src/node/hooks/solid-query.ts' },
  'vue-query': { output: './src/node/hooks/vue-query.ts' },
  'svelte-query': { output: './src/node/hooks/svelte-query.ts' },
  'angular-query': { output: './src/node/hooks/angular-query.ts' },
  docs: {
    output: './src/node/api.md',
    curl: true,
    baseUrl: 'https://localhost:8000',
  },
})
