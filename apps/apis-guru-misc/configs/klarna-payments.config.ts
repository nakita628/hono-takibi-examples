import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/klarna.com/payments/1.0.0/openapi.yaml',
  output: './src/klarna-payments/routes.ts',
  template: {},
  type: { output: './src/klarna-payments/types.ts' },
  client: { output: './src/klarna-payments/client.ts', baseUrl: '/' },
  rpc: { output: './src/klarna-payments/rpc.ts', parseResponse: true },
  swr: { output: './src/klarna-payments/hooks/swr.ts' },
  'tanstack-query': { output: './src/klarna-payments/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/klarna-payments/hooks/preact-query.ts' },
  'solid-query': { output: './src/klarna-payments/hooks/solid-query.ts' },
  'vue-query': { output: './src/klarna-payments/hooks/vue-query.ts' },
  'svelte-query': { output: './src/klarna-payments/hooks/svelte-query.ts' },
  'angular-query': { output: './src/klarna-payments/hooks/angular-query.ts' },
  docs: {
    output: './src/klarna-payments/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
