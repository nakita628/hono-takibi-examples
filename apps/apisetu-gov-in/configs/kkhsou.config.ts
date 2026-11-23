import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/kkhsou/3.0.0/openapi.yaml',
  output: './src/kkhsou/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/kkhsou/types.ts' },
  client: { output: './src/kkhsou/client.ts', baseUrl: '/' },
  rpc: { output: './src/kkhsou/rpc.ts', parseResponse: true },
  swr: { output: './src/kkhsou/hooks/swr.ts' },
  'tanstack-query': { output: './src/kkhsou/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kkhsou/hooks/preact-query.ts' },
  'solid-query': { output: './src/kkhsou/hooks/solid-query.ts' },
  'vue-query': { output: './src/kkhsou/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kkhsou/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kkhsou/hooks/angular-query.ts' },
  docs: {
    output: './src/kkhsou/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
