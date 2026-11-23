import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/networkmanager/2019-07-05/openapi.yaml',
  output: './src/networkmanager/routes.ts',
  template: {},
  type: { output: './src/networkmanager/types.ts' },
  client: { output: './src/networkmanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/networkmanager/rpc.ts', parseResponse: true },
  swr: { output: './src/networkmanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/networkmanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/networkmanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/networkmanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/networkmanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/networkmanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/networkmanager/hooks/angular-query.ts' },
  docs: {
    output: './src/networkmanager/api.md',
    curl: true,
    baseUrl: 'https://networkmanager.us-east-1.amazonaws.com',
  },
})
