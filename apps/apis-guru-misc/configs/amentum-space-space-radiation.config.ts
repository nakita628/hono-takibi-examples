import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/space_radiation/1.1.2/openapi.yaml',
  output: './src/amentum-space-space-radiation/routes.ts',
  template: {},
  type: { output: './src/amentum-space-space-radiation/types.ts' },
  client: { output: './src/amentum-space-space-radiation/client.ts', baseUrl: '/' },
  rpc: { output: './src/amentum-space-space-radiation/rpc.ts', parseResponse: true },
  swr: { output: './src/amentum-space-space-radiation/hooks/swr.ts' },
  'tanstack-query': { output: './src/amentum-space-space-radiation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amentum-space-space-radiation/hooks/preact-query.ts' },
  'solid-query': { output: './src/amentum-space-space-radiation/hooks/solid-query.ts' },
  'vue-query': { output: './src/amentum-space-space-radiation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amentum-space-space-radiation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amentum-space-space-radiation/hooks/angular-query.ts' },
  docs: {
    output: './src/amentum-space-space-radiation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
