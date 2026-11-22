import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/iap/v1beta1/openapi.yaml',
  output: './src/iap/routes.ts',
  template: {},
  type: { output: './src/iap/types.ts' },
  client: { output: './src/iap/client.ts', baseUrl: '/' },
  rpc: { output: './src/iap/rpc.ts', parseResponse: true },
  swr: { output: './src/iap/hooks/swr.ts' },
  'tanstack-query': { output: './src/iap/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iap/hooks/preact-query.ts' },
  'solid-query': { output: './src/iap/hooks/solid-query.ts' },
  'vue-query': { output: './src/iap/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iap/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iap/hooks/angular-query.ts' },
  docs: {
    output: './src/iap/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
