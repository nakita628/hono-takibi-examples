import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clicksend.com/1.0.0/openapi.yaml',
  output: './src/clicksend/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/clicksend/types.ts' },
  client: { output: './src/clicksend/client.ts', baseUrl: '/' },
  rpc: { output: './src/clicksend/rpc.ts', parseResponse: true },
  swr: { output: './src/clicksend/hooks/swr.ts' },
  'tanstack-query': { output: './src/clicksend/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clicksend/hooks/preact-query.ts' },
  'solid-query': { output: './src/clicksend/hooks/solid-query.ts' },
  'vue-query': { output: './src/clicksend/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clicksend/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clicksend/hooks/angular-query.ts' },
  docs: {
    output: './src/clicksend/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
