import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/VTEX_TEMPLATE/1.0.0/openapi.yaml',
  output: './src/vtex-template/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vtex-template/types.ts' },
  client: { output: './src/vtex-template/client.ts', baseUrl: '/' },
  rpc: { output: './src/vtex-template/rpc.ts', parseResponse: true },
  swr: { output: './src/vtex-template/hooks/swr.ts' },
  'tanstack-query': { output: './src/vtex-template/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vtex-template/hooks/preact-query.ts' },
  'solid-query': { output: './src/vtex-template/hooks/solid-query.ts' },
  'vue-query': { output: './src/vtex-template/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vtex-template/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vtex-template/hooks/angular-query.ts' },
  docs: {
    output: './src/vtex-template/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
