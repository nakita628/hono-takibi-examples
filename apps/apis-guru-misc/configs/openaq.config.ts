import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openaq.local/2.0.0/openapi.yaml',
  output: './src/openaq/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/openaq/types.ts' },
  client: { output: './src/openaq/client.ts', baseUrl: '/' },
  rpc: { output: './src/openaq/rpc.ts', parseResponse: true },
  swr: { output: './src/openaq/hooks/swr.ts' },
  'tanstack-query': { output: './src/openaq/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openaq/hooks/preact-query.ts' },
  'solid-query': { output: './src/openaq/hooks/solid-query.ts' },
  'vue-query': { output: './src/openaq/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openaq/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openaq/hooks/angular-query.ts' },
  docs: {
    output: './src/openaq/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
