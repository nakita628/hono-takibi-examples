import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Subscriptions-API-(v2)/1.0/openapi.yaml',
  output: './src/subscriptions-api-v2/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/subscriptions-api-v2/types.ts' },
  client: { output: './src/subscriptions-api-v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/subscriptions-api-v2/rpc.ts', parseResponse: true },
  swr: { output: './src/subscriptions-api-v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/subscriptions-api-v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/subscriptions-api-v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/subscriptions-api-v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/subscriptions-api-v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/subscriptions-api-v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/subscriptions-api-v2/hooks/angular-query.ts' },
  docs: {
    output: './src/subscriptions-api-v2/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
