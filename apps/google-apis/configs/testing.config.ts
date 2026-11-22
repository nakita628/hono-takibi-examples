import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/testing/v1/openapi.yaml',
  output: './src/testing/routes.ts',
  template: {},
  type: { output: './src/testing/types.ts' },
  client: { output: './src/testing/client.ts', baseUrl: '/' },
  rpc: { output: './src/testing/rpc.ts', parseResponse: true },
  swr: { output: './src/testing/hooks/swr.ts' },
  'tanstack-query': { output: './src/testing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/testing/hooks/preact-query.ts' },
  'solid-query': { output: './src/testing/hooks/solid-query.ts' },
  'vue-query': { output: './src/testing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/testing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/testing/hooks/angular-query.ts' },
  docs: {
    output: './src/testing/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
