import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/exchangerate-api.com/4/openapi.yaml',
  output: './src/exchangerate-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/exchangerate-api/types.ts' },
  client: { output: './src/exchangerate-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/exchangerate-api/rpc.ts', parseResponse: true },
  swr: { output: './src/exchangerate-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/exchangerate-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/exchangerate-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/exchangerate-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/exchangerate-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/exchangerate-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/exchangerate-api/hooks/angular-query.ts' },
  docs: {
    output: './src/exchangerate-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
