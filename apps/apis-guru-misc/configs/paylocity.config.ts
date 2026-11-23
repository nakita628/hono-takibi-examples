import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/paylocity.com/2/openapi.yaml',
  output: './src/paylocity/routes.ts',
  template: {},
  type: { output: './src/paylocity/types.ts' },
  client: { output: './src/paylocity/client.ts', baseUrl: '/' },
  rpc: { output: './src/paylocity/rpc.ts', parseResponse: true },
  swr: { output: './src/paylocity/hooks/swr.ts' },
  'tanstack-query': { output: './src/paylocity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/paylocity/hooks/preact-query.ts' },
  'solid-query': { output: './src/paylocity/hooks/solid-query.ts' },
  'vue-query': { output: './src/paylocity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/paylocity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/paylocity/hooks/angular-query.ts' },
  docs: {
    output: './src/paylocity/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
