import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/resourcegroupstaggingapi/2017-01-26/openapi.yaml',
  output: './src/resourcegroupstaggingapi/routes.ts',
  template: {},
  type: { output: './src/resourcegroupstaggingapi/types.ts' },
  client: { output: './src/resourcegroupstaggingapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/resourcegroupstaggingapi/rpc.ts', parseResponse: true },
  swr: { output: './src/resourcegroupstaggingapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/resourcegroupstaggingapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/resourcegroupstaggingapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/resourcegroupstaggingapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/resourcegroupstaggingapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/resourcegroupstaggingapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/resourcegroupstaggingapi/hooks/angular-query.ts' },
  docs: {
    output: './src/resourcegroupstaggingapi/api.md',
    curl: true,
    baseUrl: 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com',
  },
})
