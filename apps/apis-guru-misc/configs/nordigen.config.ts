import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nordigen.com/2.0 (v2)/openapi.yaml',
  output: './src/nordigen/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nordigen/types.ts' },
  client: { output: './src/nordigen/client.ts', baseUrl: '/' },
  rpc: { output: './src/nordigen/rpc.ts', parseResponse: true },
  swr: { output: './src/nordigen/hooks/swr.ts' },
  'tanstack-query': { output: './src/nordigen/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nordigen/hooks/preact-query.ts' },
  'solid-query': { output: './src/nordigen/hooks/solid-query.ts' },
  'vue-query': { output: './src/nordigen/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nordigen/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nordigen/hooks/angular-query.ts' },
  docs: {
    output: './src/nordigen/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
