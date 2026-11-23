import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/eservicearunachal/3.0.0/openapi.yaml',
  output: './src/eservicearunachal/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/eservicearunachal/types.ts' },
  client: { output: './src/eservicearunachal/client.ts', baseUrl: '/' },
  rpc: { output: './src/eservicearunachal/rpc.ts', parseResponse: true },
  swr: { output: './src/eservicearunachal/hooks/swr.ts' },
  'tanstack-query': { output: './src/eservicearunachal/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/eservicearunachal/hooks/preact-query.ts' },
  'solid-query': { output: './src/eservicearunachal/hooks/solid-query.ts' },
  'vue-query': { output: './src/eservicearunachal/hooks/vue-query.ts' },
  'svelte-query': { output: './src/eservicearunachal/hooks/svelte-query.ts' },
  'angular-query': { output: './src/eservicearunachal/hooks/angular-query.ts' },
  docs: {
    output: './src/eservicearunachal/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
