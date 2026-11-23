import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/taxrates.io/1.0.0/openapi.yaml',
  output: './src/taxrates-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/taxrates-io/types.ts' },
  client: { output: './src/taxrates-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/taxrates-io/rpc.ts', parseResponse: true },
  swr: { output: './src/taxrates-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/taxrates-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/taxrates-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/taxrates-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/taxrates-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/taxrates-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/taxrates-io/hooks/angular-query.ts' },
  docs: {
    output: './src/taxrates-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
