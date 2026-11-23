import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/commerce/2.1.0/openapi.yaml',
  output: './src/codat-io-commerce/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codat-io-commerce/types.ts' },
  client: { output: './src/codat-io-commerce/client.ts', baseUrl: '/' },
  rpc: { output: './src/codat-io-commerce/rpc.ts', parseResponse: true },
  swr: { output: './src/codat-io-commerce/hooks/swr.ts' },
  'tanstack-query': { output: './src/codat-io-commerce/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codat-io-commerce/hooks/preact-query.ts' },
  'solid-query': { output: './src/codat-io-commerce/hooks/solid-query.ts' },
  'vue-query': { output: './src/codat-io-commerce/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codat-io-commerce/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codat-io-commerce/hooks/angular-query.ts' },
  docs: {
    output: './src/codat-io-commerce/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
