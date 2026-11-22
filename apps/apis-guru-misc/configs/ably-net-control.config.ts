import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ably.net/control/1.0.14/openapi.yaml',
  output: './src/ably-net-control/routes.ts',
  template: {},
  type: { output: './src/ably-net-control/types.ts' },
  client: { output: './src/ably-net-control/client.ts', baseUrl: '/' },
  rpc: { output: './src/ably-net-control/rpc.ts', parseResponse: true },
  swr: { output: './src/ably-net-control/hooks/swr.ts' },
  'tanstack-query': { output: './src/ably-net-control/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ably-net-control/hooks/preact-query.ts' },
  'solid-query': { output: './src/ably-net-control/hooks/solid-query.ts' },
  'vue-query': { output: './src/ably-net-control/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ably-net-control/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ably-net-control/hooks/angular-query.ts' },
  docs: {
    output: './src/ably-net-control/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
