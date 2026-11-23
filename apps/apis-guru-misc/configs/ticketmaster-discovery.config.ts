import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ticketmaster.com/discovery/v2/openapi.yaml',
  output: './src/ticketmaster-discovery/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ticketmaster-discovery/types.ts' },
  client: { output: './src/ticketmaster-discovery/client.ts', baseUrl: '/' },
  rpc: { output: './src/ticketmaster-discovery/rpc.ts', parseResponse: true },
  swr: { output: './src/ticketmaster-discovery/hooks/swr.ts' },
  'tanstack-query': { output: './src/ticketmaster-discovery/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ticketmaster-discovery/hooks/preact-query.ts' },
  'solid-query': { output: './src/ticketmaster-discovery/hooks/solid-query.ts' },
  'vue-query': { output: './src/ticketmaster-discovery/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ticketmaster-discovery/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ticketmaster-discovery/hooks/angular-query.ts' },
  docs: {
    output: './src/ticketmaster-discovery/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
