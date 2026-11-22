import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/payrun.io/22.23.10.42/openapi.yaml',
  output: './src/payrun-io/routes.ts',
  template: {},
  type: { output: './src/payrun-io/types.ts' },
  client: { output: './src/payrun-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/payrun-io/rpc.ts', parseResponse: true },
  swr: { output: './src/payrun-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/payrun-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/payrun-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/payrun-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/payrun-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/payrun-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/payrun-io/hooks/angular-query.ts' },
  docs: {
    output: './src/payrun-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
