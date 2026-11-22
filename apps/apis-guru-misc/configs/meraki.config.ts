import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/meraki.com/0.0.0-streaming/openapi.yaml',
  output: './src/meraki/routes.ts',
  template: {},
  type: { output: './src/meraki/types.ts' },
  client: { output: './src/meraki/client.ts', baseUrl: '/' },
  rpc: { output: './src/meraki/rpc.ts', parseResponse: true },
  swr: { output: './src/meraki/hooks/swr.ts' },
  'tanstack-query': { output: './src/meraki/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/meraki/hooks/preact-query.ts' },
  'solid-query': { output: './src/meraki/hooks/solid-query.ts' },
  'vue-query': { output: './src/meraki/hooks/vue-query.ts' },
  'svelte-query': { output: './src/meraki/hooks/svelte-query.ts' },
  'angular-query': { output: './src/meraki/hooks/angular-query.ts' },
  docs: {
    output: './src/meraki/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
