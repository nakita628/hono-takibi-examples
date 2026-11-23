import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hpayushboard/3.0.0/openapi.yaml',
  output: './src/hpayushboard/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hpayushboard/types.ts' },
  client: { output: './src/hpayushboard/client.ts', baseUrl: '/' },
  rpc: { output: './src/hpayushboard/rpc.ts', parseResponse: true },
  swr: { output: './src/hpayushboard/hooks/swr.ts' },
  'tanstack-query': { output: './src/hpayushboard/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hpayushboard/hooks/preact-query.ts' },
  'solid-query': { output: './src/hpayushboard/hooks/solid-query.ts' },
  'vue-query': { output: './src/hpayushboard/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hpayushboard/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hpayushboard/hooks/angular-query.ts' },
  docs: {
    output: './src/hpayushboard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
