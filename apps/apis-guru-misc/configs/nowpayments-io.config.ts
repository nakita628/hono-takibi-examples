import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nowpayments.io/1.0.0/openapi.yaml',
  output: './src/nowpayments-io/routes.ts',
  template: {},
  type: { output: './src/nowpayments-io/types.ts' },
  client: { output: './src/nowpayments-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/nowpayments-io/rpc.ts', parseResponse: true },
  swr: { output: './src/nowpayments-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/nowpayments-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nowpayments-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/nowpayments-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/nowpayments-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nowpayments-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nowpayments-io/hooks/angular-query.ts' },
  docs: {
    output: './src/nowpayments-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
