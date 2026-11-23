import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/nios/3.0.0/openapi.yaml',
  output: './src/nios/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nios/types.ts' },
  client: { output: './src/nios/client.ts', baseUrl: '/' },
  rpc: { output: './src/nios/rpc.ts', parseResponse: true },
  swr: { output: './src/nios/hooks/swr.ts' },
  'tanstack-query': { output: './src/nios/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nios/hooks/preact-query.ts' },
  'solid-query': { output: './src/nios/hooks/solid-query.ts' },
  'vue-query': { output: './src/nios/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nios/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nios/hooks/angular-query.ts' },
  docs: {
    output: './src/nios/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
