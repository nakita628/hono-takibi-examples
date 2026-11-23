import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/keyserv.solutions/1.4.5/openapi.yaml',
  output: './src/keyserv-solutions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/keyserv-solutions/types.ts' },
  client: { output: './src/keyserv-solutions/client.ts', baseUrl: '/' },
  rpc: { output: './src/keyserv-solutions/rpc.ts', parseResponse: true },
  swr: { output: './src/keyserv-solutions/hooks/swr.ts' },
  'tanstack-query': { output: './src/keyserv-solutions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/keyserv-solutions/hooks/preact-query.ts' },
  'solid-query': { output: './src/keyserv-solutions/hooks/solid-query.ts' },
  'vue-query': { output: './src/keyserv-solutions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/keyserv-solutions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/keyserv-solutions/hooks/angular-query.ts' },
  docs: {
    output: './src/keyserv-solutions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
