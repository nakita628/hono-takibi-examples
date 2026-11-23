import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/barti/3.0.0/openapi.yaml',
  output: './src/barti/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/barti/types.ts' },
  client: { output: './src/barti/client.ts', baseUrl: '/' },
  rpc: { output: './src/barti/rpc.ts', parseResponse: true },
  swr: { output: './src/barti/hooks/swr.ts' },
  'tanstack-query': { output: './src/barti/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/barti/hooks/preact-query.ts' },
  'solid-query': { output: './src/barti/hooks/solid-query.ts' },
  'vue-query': { output: './src/barti/hooks/vue-query.ts' },
  'svelte-query': { output: './src/barti/hooks/svelte-query.ts' },
  'angular-query': { output: './src/barti/hooks/angular-query.ts' },
  docs: {
    output: './src/barti/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
