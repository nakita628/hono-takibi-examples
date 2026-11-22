import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudhsm/2014-05-30/openapi.yaml',
  output: './src/cloudhsm/routes.ts',
  template: {},
  type: { output: './src/cloudhsm/types.ts' },
  client: { output: './src/cloudhsm/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudhsm/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudhsm/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudhsm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudhsm/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudhsm/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudhsm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudhsm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudhsm/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudhsm/api.md',
    curl: true,
    baseUrl: 'https://cloudhsm.us-east-1.amazonaws.com',
  },
})
