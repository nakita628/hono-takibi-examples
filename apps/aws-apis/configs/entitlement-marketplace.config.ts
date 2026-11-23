import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/entitlement.marketplace/2017-01-11/openapi.yaml',
  output: './src/entitlement-marketplace/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/entitlement-marketplace/types.ts' },
  client: { output: './src/entitlement-marketplace/client.ts', baseUrl: '/' },
  rpc: { output: './src/entitlement-marketplace/rpc.ts', parseResponse: true },
  swr: { output: './src/entitlement-marketplace/hooks/swr.ts' },
  'tanstack-query': { output: './src/entitlement-marketplace/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/entitlement-marketplace/hooks/preact-query.ts' },
  'solid-query': { output: './src/entitlement-marketplace/hooks/solid-query.ts' },
  'vue-query': { output: './src/entitlement-marketplace/hooks/vue-query.ts' },
  'svelte-query': { output: './src/entitlement-marketplace/hooks/svelte-query.ts' },
  'angular-query': { output: './src/entitlement-marketplace/hooks/angular-query.ts' },
  docs: {
    output: './src/entitlement-marketplace/api.md',
    curl: true,
    baseUrl: 'https://entitlement-marketplace.us-east-1.amazonaws.com',
  },
})
