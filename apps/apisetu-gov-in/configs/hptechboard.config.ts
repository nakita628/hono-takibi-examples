import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hptechboard/3.0.0/openapi.yaml',
  output: './src/hptechboard/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hptechboard/types.ts' },
  client: { output: './src/hptechboard/client.ts', baseUrl: '/' },
  rpc: { output: './src/hptechboard/rpc.ts', parseResponse: true },
  swr: { output: './src/hptechboard/hooks/swr.ts' },
  'tanstack-query': { output: './src/hptechboard/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hptechboard/hooks/preact-query.ts' },
  'solid-query': { output: './src/hptechboard/hooks/solid-query.ts' },
  'vue-query': { output: './src/hptechboard/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hptechboard/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hptechboard/hooks/angular-query.ts' },
  docs: {
    output: './src/hptechboard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
