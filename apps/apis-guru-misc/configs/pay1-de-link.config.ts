import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pay1.de/link/v1/openapi.yaml',
  output: './src/pay1-de-link/routes.ts',
  template: {},
  type: { output: './src/pay1-de-link/types.ts' },
  client: { output: './src/pay1-de-link/client.ts', baseUrl: '/' },
  rpc: { output: './src/pay1-de-link/rpc.ts', parseResponse: true },
  swr: { output: './src/pay1-de-link/hooks/swr.ts' },
  'tanstack-query': { output: './src/pay1-de-link/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pay1-de-link/hooks/preact-query.ts' },
  'solid-query': { output: './src/pay1-de-link/hooks/solid-query.ts' },
  'vue-query': { output: './src/pay1-de-link/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pay1-de-link/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pay1-de-link/hooks/angular-query.ts' },
  docs: {
    output: './src/pay1-de-link/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
