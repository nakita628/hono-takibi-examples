import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bhartiaxagi/3.0.0/openapi.yaml',
  output: './src/bhartiaxagi/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bhartiaxagi/types.ts' },
  client: { output: './src/bhartiaxagi/client.ts', baseUrl: '/' },
  rpc: { output: './src/bhartiaxagi/rpc.ts', parseResponse: true },
  swr: { output: './src/bhartiaxagi/hooks/swr.ts' },
  'tanstack-query': { output: './src/bhartiaxagi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bhartiaxagi/hooks/preact-query.ts' },
  'solid-query': { output: './src/bhartiaxagi/hooks/solid-query.ts' },
  'vue-query': { output: './src/bhartiaxagi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bhartiaxagi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bhartiaxagi/hooks/angular-query.ts' },
  docs: {
    output: './src/bhartiaxagi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
