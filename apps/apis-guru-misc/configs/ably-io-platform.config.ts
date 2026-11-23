import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ably.io/platform/1.1.0/openapi.yaml',
  output: './src/ably-io-platform/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ably-io-platform/types.ts' },
  client: { output: './src/ably-io-platform/client.ts', baseUrl: '/' },
  rpc: { output: './src/ably-io-platform/rpc.ts', parseResponse: true },
  swr: { output: './src/ably-io-platform/hooks/swr.ts' },
  'tanstack-query': { output: './src/ably-io-platform/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ably-io-platform/hooks/preact-query.ts' },
  'solid-query': { output: './src/ably-io-platform/hooks/solid-query.ts' },
  'vue-query': { output: './src/ably-io-platform/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ably-io-platform/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ably-io-platform/hooks/angular-query.ts' },
  docs: {
    output: './src/ably-io-platform/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
