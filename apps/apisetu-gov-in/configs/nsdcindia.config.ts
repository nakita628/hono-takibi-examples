import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/nsdcindia/3.0.0/openapi.yaml',
  output: './src/nsdcindia/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nsdcindia/types.ts' },
  client: { output: './src/nsdcindia/client.ts', baseUrl: '/' },
  rpc: { output: './src/nsdcindia/rpc.ts', parseResponse: true },
  swr: { output: './src/nsdcindia/hooks/swr.ts' },
  'tanstack-query': { output: './src/nsdcindia/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nsdcindia/hooks/preact-query.ts' },
  'solid-query': { output: './src/nsdcindia/hooks/solid-query.ts' },
  'vue-query': { output: './src/nsdcindia/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nsdcindia/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nsdcindia/hooks/angular-query.ts' },
  docs: {
    output: './src/nsdcindia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
