import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/bcgnws/3.x.x/openapi.yaml',
  output: './src/bcgnws/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bcgnws/types.ts' },
  client: { output: './src/bcgnws/client.ts', baseUrl: '/' },
  rpc: { output: './src/bcgnws/rpc.ts', parseResponse: true },
  swr: { output: './src/bcgnws/hooks/swr.ts' },
  'tanstack-query': { output: './src/bcgnws/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bcgnws/hooks/preact-query.ts' },
  'solid-query': { output: './src/bcgnws/hooks/solid-query.ts' },
  'vue-query': { output: './src/bcgnws/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bcgnws/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bcgnws/hooks/angular-query.ts' },
  docs: {
    output: './src/bcgnws/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
