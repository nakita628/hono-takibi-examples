import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/simplivpn.net/1.0/openapi.yaml',
  output: './src/simplivpn-net/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/simplivpn-net/types.ts' },
  client: { output: './src/simplivpn-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/simplivpn-net/rpc.ts', parseResponse: true },
  swr: { output: './src/simplivpn-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/simplivpn-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/simplivpn-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/simplivpn-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/simplivpn-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/simplivpn-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/simplivpn-net/hooks/angular-query.ts' },
  docs: {
    output: './src/simplivpn-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
