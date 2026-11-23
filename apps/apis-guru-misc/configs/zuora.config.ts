import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zuora.com/2021-08-20/openapi.yaml',
  output: './src/zuora/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/zuora/types.ts' },
  client: { output: './src/zuora/client.ts', baseUrl: '/' },
  rpc: { output: './src/zuora/rpc.ts', parseResponse: true },
  swr: { output: './src/zuora/hooks/swr.ts' },
  'tanstack-query': { output: './src/zuora/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/zuora/hooks/preact-query.ts' },
  'solid-query': { output: './src/zuora/hooks/solid-query.ts' },
  'vue-query': { output: './src/zuora/hooks/vue-query.ts' },
  'svelte-query': { output: './src/zuora/hooks/svelte-query.ts' },
  'angular-query': { output: './src/zuora/hooks/angular-query.ts' },
  docs: {
    output: './src/zuora/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
