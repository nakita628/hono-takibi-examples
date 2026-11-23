import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openuv.io/v1/openapi.yaml',
  output: './src/openuv-io/routes.ts',
  template: {},
  type: { output: './src/openuv-io/types.ts' },
  client: { output: './src/openuv-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/openuv-io/rpc.ts', parseResponse: true },
  swr: { output: './src/openuv-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/openuv-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openuv-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/openuv-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/openuv-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openuv-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openuv-io/hooks/angular-query.ts' },
  docs: {
    output: './src/openuv-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
