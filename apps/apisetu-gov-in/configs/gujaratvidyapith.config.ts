import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/gujaratvidyapith/3.0.0/openapi.yaml',
  output: './src/gujaratvidyapith/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gujaratvidyapith/types.ts' },
  client: { output: './src/gujaratvidyapith/client.ts', baseUrl: '/' },
  rpc: { output: './src/gujaratvidyapith/rpc.ts', parseResponse: true },
  swr: { output: './src/gujaratvidyapith/hooks/swr.ts' },
  'tanstack-query': { output: './src/gujaratvidyapith/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gujaratvidyapith/hooks/preact-query.ts' },
  'solid-query': { output: './src/gujaratvidyapith/hooks/solid-query.ts' },
  'vue-query': { output: './src/gujaratvidyapith/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gujaratvidyapith/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gujaratvidyapith/hooks/angular-query.ts' },
  docs: {
    output: './src/gujaratvidyapith/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
