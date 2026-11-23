import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ticketmaster.com/publish/v2/openapi.yaml',
  output: './src/ticketmaster-publish/routes.ts',
  template: {},
  type: { output: './src/ticketmaster-publish/types.ts' },
  client: { output: './src/ticketmaster-publish/client.ts', baseUrl: '/' },
  rpc: { output: './src/ticketmaster-publish/rpc.ts', parseResponse: true },
  swr: { output: './src/ticketmaster-publish/hooks/swr.ts' },
  'tanstack-query': { output: './src/ticketmaster-publish/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ticketmaster-publish/hooks/preact-query.ts' },
  'solid-query': { output: './src/ticketmaster-publish/hooks/solid-query.ts' },
  'vue-query': { output: './src/ticketmaster-publish/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ticketmaster-publish/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ticketmaster-publish/hooks/angular-query.ts' },
  docs: {
    output: './src/ticketmaster-publish/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
