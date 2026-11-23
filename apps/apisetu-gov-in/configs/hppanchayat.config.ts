import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hppanchayat/3.0.0/openapi.yaml',
  output: './src/hppanchayat/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hppanchayat/types.ts' },
  client: { output: './src/hppanchayat/client.ts', baseUrl: '/' },
  rpc: { output: './src/hppanchayat/rpc.ts', parseResponse: true },
  swr: { output: './src/hppanchayat/hooks/swr.ts' },
  'tanstack-query': { output: './src/hppanchayat/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hppanchayat/hooks/preact-query.ts' },
  'solid-query': { output: './src/hppanchayat/hooks/solid-query.ts' },
  'vue-query': { output: './src/hppanchayat/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hppanchayat/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hppanchayat/hooks/angular-query.ts' },
  docs: {
    output: './src/hppanchayat/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
