import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/archive.org/wayback/1.0.0/openapi.yaml',
  output: './src/archive-org-wayback/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/archive-org-wayback/types.ts' },
  client: { output: './src/archive-org-wayback/client.ts', baseUrl: '/' },
  rpc: { output: './src/archive-org-wayback/rpc.ts', parseResponse: true },
  swr: { output: './src/archive-org-wayback/hooks/swr.ts' },
  'tanstack-query': { output: './src/archive-org-wayback/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/archive-org-wayback/hooks/preact-query.ts' },
  'solid-query': { output: './src/archive-org-wayback/hooks/solid-query.ts' },
  'vue-query': { output: './src/archive-org-wayback/hooks/vue-query.ts' },
  'svelte-query': { output: './src/archive-org-wayback/hooks/svelte-query.ts' },
  'angular-query': { output: './src/archive-org-wayback/hooks/angular-query.ts' },
  docs: {
    output: './src/archive-org-wayback/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
