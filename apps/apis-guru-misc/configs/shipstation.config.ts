import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shipstation.com/1.0.0/openapi.yaml',
  output: './src/shipstation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/shipstation/types.ts' },
  client: { output: './src/shipstation/client.ts', baseUrl: '/' },
  rpc: { output: './src/shipstation/rpc.ts', parseResponse: true },
  swr: { output: './src/shipstation/hooks/swr.ts' },
  'tanstack-query': { output: './src/shipstation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shipstation/hooks/preact-query.ts' },
  'solid-query': { output: './src/shipstation/hooks/solid-query.ts' },
  'vue-query': { output: './src/shipstation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shipstation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shipstation/hooks/angular-query.ts' },
  docs: {
    output: './src/shipstation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
