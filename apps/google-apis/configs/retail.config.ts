import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/retail/v2alpha/openapi.yaml',
  output: './src/retail/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/retail/types.ts' },
  client: { output: './src/retail/client.ts', baseUrl: '/' },
  rpc: { output: './src/retail/rpc.ts', parseResponse: true },
  swr: { output: './src/retail/hooks/swr.ts' },
  'tanstack-query': { output: './src/retail/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/retail/hooks/preact-query.ts' },
  'solid-query': { output: './src/retail/hooks/solid-query.ts' },
  'vue-query': { output: './src/retail/hooks/vue-query.ts' },
  'svelte-query': { output: './src/retail/hooks/svelte-query.ts' },
  'angular-query': { output: './src/retail/hooks/angular-query.ts' },
  docs: {
    output: './src/retail/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
