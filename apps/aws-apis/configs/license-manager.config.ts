import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/license-manager/2018-08-01/openapi.yaml',
  output: './src/license-manager/routes.ts',
  template: {},
  type: { output: './src/license-manager/types.ts' },
  client: { output: './src/license-manager/client.ts', baseUrl: '/' },
  rpc: { output: './src/license-manager/rpc.ts', parseResponse: true },
  swr: { output: './src/license-manager/hooks/swr.ts' },
  'tanstack-query': { output: './src/license-manager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/license-manager/hooks/preact-query.ts' },
  'solid-query': { output: './src/license-manager/hooks/solid-query.ts' },
  'vue-query': { output: './src/license-manager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/license-manager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/license-manager/hooks/angular-query.ts' },
  docs: {
    output: './src/license-manager/api.md',
    curl: true,
    baseUrl: 'https://license-manager.us-east-1.amazonaws.com',
  },
})
