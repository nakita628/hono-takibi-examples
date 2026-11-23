import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ip2proxy.com/1.0/openapi.yaml',
  output: './src/ip2proxy/routes.ts',
  template: {},
  type: { output: './src/ip2proxy/types.ts' },
  client: { output: './src/ip2proxy/client.ts', baseUrl: '/' },
  rpc: { output: './src/ip2proxy/rpc.ts', parseResponse: true },
  swr: { output: './src/ip2proxy/hooks/swr.ts' },
  'tanstack-query': { output: './src/ip2proxy/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ip2proxy/hooks/preact-query.ts' },
  'solid-query': { output: './src/ip2proxy/hooks/solid-query.ts' },
  'vue-query': { output: './src/ip2proxy/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ip2proxy/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ip2proxy/hooks/angular-query.ts' },
  docs: {
    output: './src/ip2proxy/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
