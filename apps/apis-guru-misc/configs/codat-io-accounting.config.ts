import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/accounting/2.1.0/openapi.yaml',
  output: './src/codat-io-accounting/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codat-io-accounting/types.ts' },
  client: { output: './src/codat-io-accounting/client.ts', baseUrl: '/' },
  rpc: { output: './src/codat-io-accounting/rpc.ts', parseResponse: true },
  swr: { output: './src/codat-io-accounting/hooks/swr.ts' },
  'tanstack-query': { output: './src/codat-io-accounting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codat-io-accounting/hooks/preact-query.ts' },
  'solid-query': { output: './src/codat-io-accounting/hooks/solid-query.ts' },
  'vue-query': { output: './src/codat-io-accounting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codat-io-accounting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codat-io-accounting/hooks/angular-query.ts' },
  docs: {
    output: './src/codat-io-accounting/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
