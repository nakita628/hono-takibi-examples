import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Subscriptions-API-(v3)/1.0/openapi.yaml',
  output: './src/subscriptions-api-v3/routes.ts',
  template: {},
  type: { output: './src/subscriptions-api-v3/types.ts' },
  client: { output: './src/subscriptions-api-v3/client.ts', baseUrl: '/' },
  rpc: { output: './src/subscriptions-api-v3/rpc.ts', parseResponse: true },
  swr: { output: './src/subscriptions-api-v3/hooks/swr.ts' },
  'tanstack-query': { output: './src/subscriptions-api-v3/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/subscriptions-api-v3/hooks/preact-query.ts' },
  'solid-query': { output: './src/subscriptions-api-v3/hooks/solid-query.ts' },
  'vue-query': { output: './src/subscriptions-api-v3/hooks/vue-query.ts' },
  'svelte-query': { output: './src/subscriptions-api-v3/hooks/svelte-query.ts' },
  'angular-query': { output: './src/subscriptions-api-v3/hooks/angular-query.ts' },
  docs: {
    output: './src/subscriptions-api-v3/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
