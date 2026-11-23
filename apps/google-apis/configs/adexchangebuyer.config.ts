import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adexchangebuyer/v1.4/openapi.yaml',
  output: './src/adexchangebuyer/routes.ts',
  template: {},
  type: { output: './src/adexchangebuyer/types.ts' },
  client: { output: './src/adexchangebuyer/client.ts', baseUrl: '/' },
  rpc: { output: './src/adexchangebuyer/rpc.ts', parseResponse: true },
  swr: { output: './src/adexchangebuyer/hooks/swr.ts' },
  'tanstack-query': { output: './src/adexchangebuyer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/adexchangebuyer/hooks/preact-query.ts' },
  'solid-query': { output: './src/adexchangebuyer/hooks/solid-query.ts' },
  'vue-query': { output: './src/adexchangebuyer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/adexchangebuyer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/adexchangebuyer/hooks/angular-query.ts' },
  docs: {
    output: './src/adexchangebuyer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
