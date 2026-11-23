import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/jellyfin.local/v1/openapi.yaml',
  output: './src/jellyfin/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/jellyfin/types.ts' },
  client: { output: './src/jellyfin/client.ts', baseUrl: '/' },
  rpc: { output: './src/jellyfin/rpc.ts', parseResponse: true },
  swr: { output: './src/jellyfin/hooks/swr.ts' },
  'tanstack-query': { output: './src/jellyfin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/jellyfin/hooks/preact-query.ts' },
  'solid-query': { output: './src/jellyfin/hooks/solid-query.ts' },
  'vue-query': { output: './src/jellyfin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/jellyfin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/jellyfin/hooks/angular-query.ts' },
  docs: {
    output: './src/jellyfin/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
