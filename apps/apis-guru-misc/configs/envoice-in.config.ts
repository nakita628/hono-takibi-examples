import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/envoice.in/v1/openapi.yaml',
  output: './src/envoice-in/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/envoice-in/types.ts' },
  client: { output: './src/envoice-in/client.ts', baseUrl: '/' },
  rpc: { output: './src/envoice-in/rpc.ts', parseResponse: true },
  swr: { output: './src/envoice-in/hooks/swr.ts' },
  'tanstack-query': { output: './src/envoice-in/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/envoice-in/hooks/preact-query.ts' },
  'solid-query': { output: './src/envoice-in/hooks/solid-query.ts' },
  'vue-query': { output: './src/envoice-in/hooks/vue-query.ts' },
  'svelte-query': { output: './src/envoice-in/hooks/svelte-query.ts' },
  'angular-query': { output: './src/envoice-in/hooks/angular-query.ts' },
  docs: {
    output: './src/envoice-in/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
