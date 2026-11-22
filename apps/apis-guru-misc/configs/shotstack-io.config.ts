import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shotstack.io/v1/openapi.yaml',
  output: './src/shotstack-io/routes.ts',
  template: {},
  type: { output: './src/shotstack-io/types.ts' },
  client: { output: './src/shotstack-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/shotstack-io/rpc.ts', parseResponse: true },
  swr: { output: './src/shotstack-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/shotstack-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shotstack-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/shotstack-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/shotstack-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shotstack-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shotstack-io/hooks/angular-query.ts' },
  docs: {
    output: './src/shotstack-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
