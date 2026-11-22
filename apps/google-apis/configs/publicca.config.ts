import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/publicca/v1beta1/openapi.yaml',
  output: './src/publicca/routes.ts',
  template: {},
  type: { output: './src/publicca/types.ts' },
  client: { output: './src/publicca/client.ts', baseUrl: '/' },
  rpc: { output: './src/publicca/rpc.ts', parseResponse: true },
  swr: { output: './src/publicca/hooks/swr.ts' },
  'tanstack-query': { output: './src/publicca/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/publicca/hooks/preact-query.ts' },
  'solid-query': { output: './src/publicca/hooks/solid-query.ts' },
  'vue-query': { output: './src/publicca/hooks/vue-query.ts' },
  'svelte-query': { output: './src/publicca/hooks/svelte-query.ts' },
  'angular-query': { output: './src/publicca/hooks/angular-query.ts' },
  docs: {
    output: './src/publicca/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
