import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/brex.io/2021.12/openapi.yaml',
  output: './src/brex-io/routes.ts',
  template: {},
  type: { output: './src/brex-io/types.ts' },
  client: { output: './src/brex-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/brex-io/rpc.ts', parseResponse: true },
  swr: { output: './src/brex-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/brex-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/brex-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/brex-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/brex-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/brex-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/brex-io/hooks/angular-query.ts' },
  docs: {
    output: './src/brex-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
