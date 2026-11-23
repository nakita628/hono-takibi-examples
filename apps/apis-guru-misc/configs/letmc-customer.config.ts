import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/letmc.com/customer/v2-customer/openapi.yaml',
  output: './src/letmc-customer/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/letmc-customer/types.ts' },
  client: { output: './src/letmc-customer/client.ts', baseUrl: '/' },
  rpc: { output: './src/letmc-customer/rpc.ts', parseResponse: true },
  swr: { output: './src/letmc-customer/hooks/swr.ts' },
  'tanstack-query': { output: './src/letmc-customer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/letmc-customer/hooks/preact-query.ts' },
  'solid-query': { output: './src/letmc-customer/hooks/solid-query.ts' },
  'vue-query': { output: './src/letmc-customer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/letmc-customer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/letmc-customer/hooks/angular-query.ts' },
  docs: {
    output: './src/letmc-customer/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
