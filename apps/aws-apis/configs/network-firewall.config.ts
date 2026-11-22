import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/network-firewall/2020-11-12/openapi.yaml',
  output: './src/network-firewall/routes.ts',
  template: {},
  type: { output: './src/network-firewall/types.ts' },
  client: { output: './src/network-firewall/client.ts', baseUrl: '/' },
  rpc: { output: './src/network-firewall/rpc.ts', parseResponse: true },
  swr: { output: './src/network-firewall/hooks/swr.ts' },
  'tanstack-query': { output: './src/network-firewall/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/network-firewall/hooks/preact-query.ts' },
  'solid-query': { output: './src/network-firewall/hooks/solid-query.ts' },
  'vue-query': { output: './src/network-firewall/hooks/vue-query.ts' },
  'svelte-query': { output: './src/network-firewall/hooks/svelte-query.ts' },
  'angular-query': { output: './src/network-firewall/hooks/angular-query.ts' },
  docs: {
    output: './src/network-firewall/api.md',
    curl: true,
    baseUrl: 'https://network-firewall.us-east-1.amazonaws.com',
  },
})
