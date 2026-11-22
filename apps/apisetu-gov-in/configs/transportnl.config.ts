import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportnl/3.0.0/openapi.yaml',
  output: './src/transportnl/routes.ts',
  template: {},
  type: { output: './src/transportnl/types.ts' },
  client: { output: './src/transportnl/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportnl/rpc.ts', parseResponse: true },
  swr: { output: './src/transportnl/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportnl/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportnl/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportnl/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportnl/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportnl/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportnl/hooks/angular-query.ts' },
  docs: {
    output: './src/transportnl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
