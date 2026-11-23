import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pocketsmith.com/2.0/openapi.yaml',
  output: './src/pocketsmith/routes.ts',
  template: {},
  type: { output: './src/pocketsmith/types.ts' },
  client: { output: './src/pocketsmith/client.ts', baseUrl: '/' },
  rpc: { output: './src/pocketsmith/rpc.ts', parseResponse: true },
  swr: { output: './src/pocketsmith/hooks/swr.ts' },
  'tanstack-query': { output: './src/pocketsmith/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pocketsmith/hooks/preact-query.ts' },
  'solid-query': { output: './src/pocketsmith/hooks/solid-query.ts' },
  'vue-query': { output: './src/pocketsmith/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pocketsmith/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pocketsmith/hooks/angular-query.ts' },
  docs: {
    output: './src/pocketsmith/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
