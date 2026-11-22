import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/networkmanagement/v1beta1/openapi.yaml',
  output: './src/networkmanagement/routes.ts',
  template: {},
  type: { output: './src/networkmanagement/types.ts' },
  client: { output: './src/networkmanagement/client.ts', baseUrl: '/' },
  rpc: { output: './src/networkmanagement/rpc.ts', parseResponse: true },
  swr: { output: './src/networkmanagement/hooks/swr.ts' },
  'tanstack-query': { output: './src/networkmanagement/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/networkmanagement/hooks/preact-query.ts' },
  'solid-query': { output: './src/networkmanagement/hooks/solid-query.ts' },
  'vue-query': { output: './src/networkmanagement/hooks/vue-query.ts' },
  'svelte-query': { output: './src/networkmanagement/hooks/svelte-query.ts' },
  'angular-query': { output: './src/networkmanagement/hooks/angular-query.ts' },
  docs: {
    output: './src/networkmanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
