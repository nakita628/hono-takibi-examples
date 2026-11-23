import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/atmosphere/1.1.1/openapi.yaml',
  output: './src/amentum-space-atmosphere/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/amentum-space-atmosphere/types.ts' },
  client: { output: './src/amentum-space-atmosphere/client.ts', baseUrl: '/' },
  rpc: { output: './src/amentum-space-atmosphere/rpc.ts', parseResponse: true },
  swr: { output: './src/amentum-space-atmosphere/hooks/swr.ts' },
  'tanstack-query': { output: './src/amentum-space-atmosphere/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amentum-space-atmosphere/hooks/preact-query.ts' },
  'solid-query': { output: './src/amentum-space-atmosphere/hooks/solid-query.ts' },
  'vue-query': { output: './src/amentum-space-atmosphere/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amentum-space-atmosphere/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amentum-space-atmosphere/hooks/angular-query.ts' },
  docs: {
    output: './src/amentum-space-atmosphere/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
