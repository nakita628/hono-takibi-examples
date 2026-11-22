import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/yodlee.com/1.1.0/openapi.yaml',
  output: './src/yodlee/routes.ts',
  template: {},
  type: { output: './src/yodlee/types.ts' },
  client: { output: './src/yodlee/client.ts', baseUrl: '/' },
  rpc: { output: './src/yodlee/rpc.ts', parseResponse: true },
  swr: { output: './src/yodlee/hooks/swr.ts' },
  'tanstack-query': { output: './src/yodlee/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/yodlee/hooks/preact-query.ts' },
  'solid-query': { output: './src/yodlee/hooks/solid-query.ts' },
  'vue-query': { output: './src/yodlee/hooks/vue-query.ts' },
  'svelte-query': { output: './src/yodlee/hooks/svelte-query.ts' },
  'angular-query': { output: './src/yodlee/hooks/angular-query.ts' },
  docs: {
    output: './src/yodlee/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
