import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/pricing/2017-10-15/openapi.yaml',
  output: './src/pricing/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pricing/types.ts' },
  client: { output: './src/pricing/client.ts', baseUrl: '/' },
  rpc: { output: './src/pricing/rpc.ts', parseResponse: true },
  swr: { output: './src/pricing/hooks/swr.ts' },
  'tanstack-query': { output: './src/pricing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pricing/hooks/preact-query.ts' },
  'solid-query': { output: './src/pricing/hooks/solid-query.ts' },
  'vue-query': { output: './src/pricing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pricing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pricing/hooks/angular-query.ts' },
  docs: {
    output: './src/pricing/api.md',
    curl: true,
    baseUrl: 'https://pricing.us-east-1.amazonaws.com',
  },
})
