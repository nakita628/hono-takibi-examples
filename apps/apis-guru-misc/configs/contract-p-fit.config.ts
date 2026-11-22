import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/contract-p.fit/1.0/openapi.yaml',
  output: './src/contract-p-fit/routes.ts',
  template: {},
  type: { output: './src/contract-p-fit/types.ts' },
  client: { output: './src/contract-p-fit/client.ts', baseUrl: '/' },
  rpc: { output: './src/contract-p-fit/rpc.ts', parseResponse: true },
  swr: { output: './src/contract-p-fit/hooks/swr.ts' },
  'tanstack-query': { output: './src/contract-p-fit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/contract-p-fit/hooks/preact-query.ts' },
  'solid-query': { output: './src/contract-p-fit/hooks/solid-query.ts' },
  'vue-query': { output: './src/contract-p-fit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/contract-p-fit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/contract-p-fit/hooks/angular-query.ts' },
  docs: {
    output: './src/contract-p-fit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
