import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/chaingateway.io/1.0/openapi.yaml',
  output: './src/chaingateway-io/routes.ts',
  template: {},
  type: { output: './src/chaingateway-io/types.ts' },
  client: { output: './src/chaingateway-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/chaingateway-io/rpc.ts', parseResponse: true },
  swr: { output: './src/chaingateway-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/chaingateway-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/chaingateway-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/chaingateway-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/chaingateway-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/chaingateway-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/chaingateway-io/hooks/angular-query.ts' },
  docs: {
    output: './src/chaingateway-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
