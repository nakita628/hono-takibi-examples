import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stripe.com/2022-11-15/openapi.yaml',
  output: './src/stripe/routes.ts',
  template: {},
  type: { output: './src/stripe/types.ts' },
  client: { output: './src/stripe/client.ts', baseUrl: '/' },
  rpc: { output: './src/stripe/rpc.ts', parseResponse: true },
  swr: { output: './src/stripe/hooks/swr.ts' },
  'tanstack-query': { output: './src/stripe/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/stripe/hooks/preact-query.ts' },
  'solid-query': { output: './src/stripe/hooks/solid-query.ts' },
  'vue-query': { output: './src/stripe/hooks/vue-query.ts' },
  'svelte-query': { output: './src/stripe/hooks/svelte-query.ts' },
  'angular-query': { output: './src/stripe/hooks/angular-query.ts' },
  docs: {
    output: './src/stripe/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
