import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/youneedabudget.com/1.0.0/openapi.yaml',
  output: './src/youneedabudget/routes.ts',
  template: {},
  type: { output: './src/youneedabudget/types.ts' },
  client: { output: './src/youneedabudget/client.ts', baseUrl: '/' },
  rpc: { output: './src/youneedabudget/rpc.ts', parseResponse: true },
  swr: { output: './src/youneedabudget/hooks/swr.ts' },
  'tanstack-query': { output: './src/youneedabudget/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/youneedabudget/hooks/preact-query.ts' },
  'solid-query': { output: './src/youneedabudget/hooks/solid-query.ts' },
  'vue-query': { output: './src/youneedabudget/hooks/vue-query.ts' },
  'svelte-query': { output: './src/youneedabudget/hooks/svelte-query.ts' },
  'angular-query': { output: './src/youneedabudget/hooks/angular-query.ts' },
  docs: {
    output: './src/youneedabudget/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
