import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ntropy.network/1.0.0/openapi.yaml',
  output: './src/ntropy-network/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ntropy-network/types.ts' },
  client: { output: './src/ntropy-network/client.ts', baseUrl: '/' },
  rpc: { output: './src/ntropy-network/rpc.ts', parseResponse: true },
  swr: { output: './src/ntropy-network/hooks/swr.ts' },
  'tanstack-query': { output: './src/ntropy-network/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ntropy-network/hooks/preact-query.ts' },
  'solid-query': { output: './src/ntropy-network/hooks/solid-query.ts' },
  'vue-query': { output: './src/ntropy-network/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ntropy-network/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ntropy-network/hooks/angular-query.ts' },
  docs: {
    output: './src/ntropy-network/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
