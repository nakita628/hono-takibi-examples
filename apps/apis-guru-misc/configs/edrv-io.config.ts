import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/edrv.io/v1/openapi.yaml',
  output: './src/edrv-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/edrv-io/types.ts' },
  client: { output: './src/edrv-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/edrv-io/rpc.ts', parseResponse: true },
  swr: { output: './src/edrv-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/edrv-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/edrv-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/edrv-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/edrv-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/edrv-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/edrv-io/hooks/angular-query.ts' },
  docs: {
    output: './src/edrv-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
