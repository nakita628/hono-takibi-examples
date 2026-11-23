import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/open511/1.0.0/openapi.yaml',
  output: './src/open511/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/open511/types.ts' },
  client: { output: './src/open511/client.ts', baseUrl: '/' },
  rpc: { output: './src/open511/rpc.ts', parseResponse: true },
  swr: { output: './src/open511/hooks/swr.ts' },
  'tanstack-query': { output: './src/open511/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/open511/hooks/preact-query.ts' },
  'solid-query': { output: './src/open511/hooks/solid-query.ts' },
  'vue-query': { output: './src/open511/hooks/vue-query.ts' },
  'svelte-query': { output: './src/open511/hooks/svelte-query.ts' },
  'angular-query': { output: './src/open511/hooks/angular-query.ts' },
  docs: {
    output: './src/open511/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
