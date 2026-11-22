import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/braket/2019-09-01/openapi.yaml',
  output: './src/braket/routes.ts',
  template: {},
  type: { output: './src/braket/types.ts' },
  client: { output: './src/braket/client.ts', baseUrl: '/' },
  rpc: { output: './src/braket/rpc.ts', parseResponse: true },
  swr: { output: './src/braket/hooks/swr.ts' },
  'tanstack-query': { output: './src/braket/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/braket/hooks/preact-query.ts' },
  'solid-query': { output: './src/braket/hooks/solid-query.ts' },
  'vue-query': { output: './src/braket/hooks/vue-query.ts' },
  'svelte-query': { output: './src/braket/hooks/svelte-query.ts' },
  'angular-query': { output: './src/braket/hooks/angular-query.ts' },
  docs: {
    output: './src/braket/api.md',
    curl: true,
    baseUrl: 'https://braket.us-east-1.amazonaws.com',
  },
})
