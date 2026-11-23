import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/bills/v1/openapi.yaml',
  output: './src/bills/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bills/types.ts' },
  client: { output: './src/bills/client.ts', baseUrl: '/' },
  rpc: { output: './src/bills/rpc.ts', parseResponse: true },
  swr: { output: './src/bills/hooks/swr.ts' },
  'tanstack-query': { output: './src/bills/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bills/hooks/preact-query.ts' },
  'solid-query': { output: './src/bills/hooks/solid-query.ts' },
  'vue-query': { output: './src/bills/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bills/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bills/hooks/angular-query.ts' },
  docs: {
    output: './src/bills/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
