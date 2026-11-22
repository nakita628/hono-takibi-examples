import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lookoutequipment/2020-12-15/openapi.yaml',
  output: './src/lookoutequipment/routes.ts',
  template: {},
  type: { output: './src/lookoutequipment/types.ts' },
  client: { output: './src/lookoutequipment/client.ts', baseUrl: '/' },
  rpc: { output: './src/lookoutequipment/rpc.ts', parseResponse: true },
  swr: { output: './src/lookoutequipment/hooks/swr.ts' },
  'tanstack-query': { output: './src/lookoutequipment/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lookoutequipment/hooks/preact-query.ts' },
  'solid-query': { output: './src/lookoutequipment/hooks/solid-query.ts' },
  'vue-query': { output: './src/lookoutequipment/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lookoutequipment/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lookoutequipment/hooks/angular-query.ts' },
  docs: {
    output: './src/lookoutequipment/api.md',
    curl: true,
    baseUrl: 'https://lookoutequipment.us-east-1.amazonaws.com',
  },
})
