import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/global-magnet/1.3.0/openapi.yaml',
  output: './src/amentum-space-global-magnet/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/amentum-space-global-magnet/types.ts' },
  client: { output: './src/amentum-space-global-magnet/client.ts', baseUrl: '/' },
  rpc: { output: './src/amentum-space-global-magnet/rpc.ts', parseResponse: true },
  swr: { output: './src/amentum-space-global-magnet/hooks/swr.ts' },
  'tanstack-query': { output: './src/amentum-space-global-magnet/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amentum-space-global-magnet/hooks/preact-query.ts' },
  'solid-query': { output: './src/amentum-space-global-magnet/hooks/solid-query.ts' },
  'vue-query': { output: './src/amentum-space-global-magnet/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amentum-space-global-magnet/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amentum-space-global-magnet/hooks/angular-query.ts' },
  docs: {
    output: './src/amentum-space-global-magnet/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
