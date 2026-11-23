import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/cdcgov.local/prime-data-hub/0.2.0-oas3/openapi.yaml',
  output: './src/cdcgov-prime-data-hub/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cdcgov-prime-data-hub/types.ts' },
  client: { output: './src/cdcgov-prime-data-hub/client.ts', baseUrl: '/' },
  rpc: { output: './src/cdcgov-prime-data-hub/rpc.ts', parseResponse: true },
  swr: { output: './src/cdcgov-prime-data-hub/hooks/swr.ts' },
  'tanstack-query': { output: './src/cdcgov-prime-data-hub/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cdcgov-prime-data-hub/hooks/preact-query.ts' },
  'solid-query': { output: './src/cdcgov-prime-data-hub/hooks/solid-query.ts' },
  'vue-query': { output: './src/cdcgov-prime-data-hub/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cdcgov-prime-data-hub/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cdcgov-prime-data-hub/hooks/angular-query.ts' },
  docs: {
    output: './src/cdcgov-prime-data-hub/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
