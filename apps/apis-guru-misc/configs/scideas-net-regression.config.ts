import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/scideas.net/regression/1.0/openapi.yaml',
  output: './src/scideas-net-regression/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/scideas-net-regression/types.ts' },
  client: { output: './src/scideas-net-regression/client.ts', baseUrl: '/' },
  rpc: { output: './src/scideas-net-regression/rpc.ts', parseResponse: true },
  swr: { output: './src/scideas-net-regression/hooks/swr.ts' },
  'tanstack-query': { output: './src/scideas-net-regression/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/scideas-net-regression/hooks/preact-query.ts' },
  'solid-query': { output: './src/scideas-net-regression/hooks/solid-query.ts' },
  'vue-query': { output: './src/scideas-net-regression/hooks/vue-query.ts' },
  'svelte-query': { output: './src/scideas-net-regression/hooks/svelte-query.ts' },
  'angular-query': { output: './src/scideas-net-regression/hooks/angular-query.ts' },
  docs: {
    output: './src/scideas-net-regression/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
