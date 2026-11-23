import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transporttn/3.0.0/openapi.yaml',
  output: './src/transporttn/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transporttn/types.ts' },
  client: { output: './src/transporttn/client.ts', baseUrl: '/' },
  rpc: { output: './src/transporttn/rpc.ts', parseResponse: true },
  swr: { output: './src/transporttn/hooks/swr.ts' },
  'tanstack-query': { output: './src/transporttn/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transporttn/hooks/preact-query.ts' },
  'solid-query': { output: './src/transporttn/hooks/solid-query.ts' },
  'vue-query': { output: './src/transporttn/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transporttn/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transporttn/hooks/angular-query.ts' },
  docs: {
    output: './src/transporttn/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
