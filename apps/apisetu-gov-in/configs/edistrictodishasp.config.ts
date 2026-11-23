import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictodishasp/3.0.0/openapi.yaml',
  output: './src/edistrictodishasp/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/edistrictodishasp/types.ts' },
  client: { output: './src/edistrictodishasp/client.ts', baseUrl: '/' },
  rpc: { output: './src/edistrictodishasp/rpc.ts', parseResponse: true },
  swr: { output: './src/edistrictodishasp/hooks/swr.ts' },
  'tanstack-query': { output: './src/edistrictodishasp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/edistrictodishasp/hooks/preact-query.ts' },
  'solid-query': { output: './src/edistrictodishasp/hooks/solid-query.ts' },
  'vue-query': { output: './src/edistrictodishasp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/edistrictodishasp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/edistrictodishasp/hooks/angular-query.ts' },
  docs: {
    output: './src/edistrictodishasp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
