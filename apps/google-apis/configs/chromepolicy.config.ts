import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/chromepolicy/v1/openapi.yaml',
  output: './src/chromepolicy/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/chromepolicy/types.ts' },
  client: { output: './src/chromepolicy/client.ts', baseUrl: '/' },
  rpc: { output: './src/chromepolicy/rpc.ts', parseResponse: true },
  swr: { output: './src/chromepolicy/hooks/swr.ts' },
  'tanstack-query': { output: './src/chromepolicy/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/chromepolicy/hooks/preact-query.ts' },
  'solid-query': { output: './src/chromepolicy/hooks/solid-query.ts' },
  'vue-query': { output: './src/chromepolicy/hooks/vue-query.ts' },
  'svelte-query': { output: './src/chromepolicy/hooks/svelte-query.ts' },
  'angular-query': { output: './src/chromepolicy/hooks/angular-query.ts' },
  docs: {
    output: './src/chromepolicy/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
