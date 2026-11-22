import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/vpcaccess/v1/openapi.yaml',
  output: './src/vpcaccess/routes.ts',
  template: {},
  type: { output: './src/vpcaccess/types.ts' },
  client: { output: './src/vpcaccess/client.ts', baseUrl: '/' },
  rpc: { output: './src/vpcaccess/rpc.ts', parseResponse: true },
  swr: { output: './src/vpcaccess/hooks/swr.ts' },
  'tanstack-query': { output: './src/vpcaccess/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vpcaccess/hooks/preact-query.ts' },
  'solid-query': { output: './src/vpcaccess/hooks/solid-query.ts' },
  'vue-query': { output: './src/vpcaccess/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vpcaccess/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vpcaccess/hooks/angular-query.ts' },
  docs: {
    output: './src/vpcaccess/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
