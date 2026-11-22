import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/etherpad.local/1.2.15/openapi.yaml',
  output: './src/etherpad/routes.ts',
  template: {},
  type: { output: './src/etherpad/types.ts' },
  client: { output: './src/etherpad/client.ts', baseUrl: '/' },
  rpc: { output: './src/etherpad/rpc.ts', parseResponse: true },
  swr: { output: './src/etherpad/hooks/swr.ts' },
  'tanstack-query': { output: './src/etherpad/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/etherpad/hooks/preact-query.ts' },
  'solid-query': { output: './src/etherpad/hooks/solid-query.ts' },
  'vue-query': { output: './src/etherpad/hooks/vue-query.ts' },
  'svelte-query': { output: './src/etherpad/hooks/svelte-query.ts' },
  'angular-query': { output: './src/etherpad/hooks/angular-query.ts' },
  docs: {
    output: './src/etherpad/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
