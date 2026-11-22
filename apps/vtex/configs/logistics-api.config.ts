import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Logistics-API/1.0/openapi.yaml',
  output: './src/logistics-api/routes.ts',
  template: {},
  type: { output: './src/logistics-api/types.ts' },
  client: { output: './src/logistics-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/logistics-api/rpc.ts', parseResponse: true },
  swr: { output: './src/logistics-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/logistics-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/logistics-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/logistics-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/logistics-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/logistics-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/logistics-api/hooks/angular-query.ts' },
  docs: {
    output: './src/logistics-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
