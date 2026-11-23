import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/dgecerttn/3.0.0/openapi.yaml',
  output: './src/dgecerttn/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dgecerttn/types.ts' },
  client: { output: './src/dgecerttn/client.ts', baseUrl: '/' },
  rpc: { output: './src/dgecerttn/rpc.ts', parseResponse: true },
  swr: { output: './src/dgecerttn/hooks/swr.ts' },
  'tanstack-query': { output: './src/dgecerttn/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dgecerttn/hooks/preact-query.ts' },
  'solid-query': { output: './src/dgecerttn/hooks/solid-query.ts' },
  'vue-query': { output: './src/dgecerttn/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dgecerttn/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dgecerttn/hooks/angular-query.ts' },
  docs: {
    output: './src/dgecerttn/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
