import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotthingsgraph/2018-09-06/openapi.yaml',
  output: './src/iotthingsgraph/routes.ts',
  template: {},
  type: { output: './src/iotthingsgraph/types.ts' },
  client: { output: './src/iotthingsgraph/client.ts', baseUrl: '/' },
  rpc: { output: './src/iotthingsgraph/rpc.ts', parseResponse: true },
  swr: { output: './src/iotthingsgraph/hooks/swr.ts' },
  'tanstack-query': { output: './src/iotthingsgraph/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iotthingsgraph/hooks/preact-query.ts' },
  'solid-query': { output: './src/iotthingsgraph/hooks/solid-query.ts' },
  'vue-query': { output: './src/iotthingsgraph/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iotthingsgraph/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iotthingsgraph/hooks/angular-query.ts' },
  docs: {
    output: './src/iotthingsgraph/api.md',
    curl: true,
    baseUrl: 'https://iotthingsgraph.us-east-1.amazonaws.com',
  },
})
