import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/admob/v1beta/openapi.yaml',
  output: './src/admob/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/admob/types.ts' },
  client: { output: './src/admob/client.ts', baseUrl: '/' },
  rpc: { output: './src/admob/rpc.ts', parseResponse: true },
  swr: { output: './src/admob/hooks/swr.ts' },
  'tanstack-query': { output: './src/admob/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/admob/hooks/preact-query.ts' },
  'solid-query': { output: './src/admob/hooks/solid-query.ts' },
  'vue-query': { output: './src/admob/hooks/vue-query.ts' },
  'svelte-query': { output: './src/admob/hooks/svelte-query.ts' },
  'angular-query': { output: './src/admob/hooks/angular-query.ts' },
  docs: {
    output: './src/admob/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
