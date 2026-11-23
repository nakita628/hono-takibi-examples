import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/acko/3.0.0/openapi.yaml',
  output: './src/acko/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/acko/types.ts' },
  client: { output: './src/acko/client.ts', baseUrl: '/' },
  rpc: { output: './src/acko/rpc.ts', parseResponse: true },
  swr: { output: './src/acko/hooks/swr.ts' },
  'tanstack-query': { output: './src/acko/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/acko/hooks/preact-query.ts' },
  'solid-query': { output: './src/acko/hooks/solid-query.ts' },
  'vue-query': { output: './src/acko/hooks/vue-query.ts' },
  'svelte-query': { output: './src/acko/hooks/svelte-query.ts' },
  'angular-query': { output: './src/acko/hooks/angular-query.ts' },
  docs: {
    output: './src/acko/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
