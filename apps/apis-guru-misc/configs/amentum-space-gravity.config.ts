import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/gravity/1.1.1/openapi.yaml',
  output: './src/amentum-space-gravity/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/amentum-space-gravity/types.ts' },
  client: { output: './src/amentum-space-gravity/client.ts', baseUrl: '/' },
  rpc: { output: './src/amentum-space-gravity/rpc.ts', parseResponse: true },
  swr: { output: './src/amentum-space-gravity/hooks/swr.ts' },
  'tanstack-query': { output: './src/amentum-space-gravity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amentum-space-gravity/hooks/preact-query.ts' },
  'solid-query': { output: './src/amentum-space-gravity/hooks/solid-query.ts' },
  'vue-query': { output: './src/amentum-space-gravity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amentum-space-gravity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amentum-space-gravity/hooks/angular-query.ts' },
  docs: {
    output: './src/amentum-space-gravity/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
