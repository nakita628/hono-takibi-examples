import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictup/3.0.0/openapi.yaml',
  output: './src/edistrictup/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/edistrictup/types.ts' },
  client: { output: './src/edistrictup/client.ts', baseUrl: '/' },
  rpc: { output: './src/edistrictup/rpc.ts', parseResponse: true },
  swr: { output: './src/edistrictup/hooks/swr.ts' },
  'tanstack-query': { output: './src/edistrictup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/edistrictup/hooks/preact-query.ts' },
  'solid-query': { output: './src/edistrictup/hooks/solid-query.ts' },
  'vue-query': { output: './src/edistrictup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/edistrictup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/edistrictup/hooks/angular-query.ts' },
  docs: {
    output: './src/edistrictup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
