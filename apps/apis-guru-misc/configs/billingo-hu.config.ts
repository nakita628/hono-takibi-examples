import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/billingo.hu/3.0.7/openapi.yaml',
  output: './src/billingo-hu/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/billingo-hu/types.ts' },
  client: { output: './src/billingo-hu/client.ts', baseUrl: '/' },
  rpc: { output: './src/billingo-hu/rpc.ts', parseResponse: true },
  swr: { output: './src/billingo-hu/hooks/swr.ts' },
  'tanstack-query': { output: './src/billingo-hu/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/billingo-hu/hooks/preact-query.ts' },
  'solid-query': { output: './src/billingo-hu/hooks/solid-query.ts' },
  'vue-query': { output: './src/billingo-hu/hooks/vue-query.ts' },
  'svelte-query': { output: './src/billingo-hu/hooks/svelte-query.ts' },
  'angular-query': { output: './src/billingo-hu/hooks/angular-query.ts' },
  docs: {
    output: './src/billingo-hu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
