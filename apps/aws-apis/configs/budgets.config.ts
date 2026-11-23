import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/budgets/2016-10-20/openapi.yaml',
  output: './src/budgets/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/budgets/types.ts' },
  client: { output: './src/budgets/client.ts', baseUrl: '/' },
  rpc: { output: './src/budgets/rpc.ts', parseResponse: true },
  swr: { output: './src/budgets/hooks/swr.ts' },
  'tanstack-query': { output: './src/budgets/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/budgets/hooks/preact-query.ts' },
  'solid-query': { output: './src/budgets/hooks/solid-query.ts' },
  'vue-query': { output: './src/budgets/hooks/vue-query.ts' },
  'svelte-query': { output: './src/budgets/hooks/svelte-query.ts' },
  'angular-query': { output: './src/budgets/hooks/angular-query.ts' },
  docs: {
    output: './src/budgets/api.md',
    curl: true,
    baseUrl: 'https://budgets.us-east-1.amazonaws.com',
  },
})
