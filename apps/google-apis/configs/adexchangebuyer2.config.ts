import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adexchangebuyer2/v2beta1/openapi.yaml',
  output: './src/adexchangebuyer2/routes.ts',
  template: {},
  type: { output: './src/adexchangebuyer2/types.ts' },
  client: { output: './src/adexchangebuyer2/client.ts', baseUrl: '/' },
  rpc: { output: './src/adexchangebuyer2/rpc.ts', parseResponse: true },
  swr: { output: './src/adexchangebuyer2/hooks/swr.ts' },
  'tanstack-query': { output: './src/adexchangebuyer2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/adexchangebuyer2/hooks/preact-query.ts' },
  'solid-query': { output: './src/adexchangebuyer2/hooks/solid-query.ts' },
  'vue-query': { output: './src/adexchangebuyer2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/adexchangebuyer2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/adexchangebuyer2/hooks/angular-query.ts' },
  docs: {
    output: './src/adexchangebuyer2/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
