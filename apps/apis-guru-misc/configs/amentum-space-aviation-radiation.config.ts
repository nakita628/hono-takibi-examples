import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/aviation_radiation/1.5.0/openapi.yaml',
  output: './src/amentum-space-aviation-radiation/routes.ts',
  template: {},
  type: { output: './src/amentum-space-aviation-radiation/types.ts' },
  client: { output: './src/amentum-space-aviation-radiation/client.ts', baseUrl: '/' },
  rpc: { output: './src/amentum-space-aviation-radiation/rpc.ts', parseResponse: true },
  swr: { output: './src/amentum-space-aviation-radiation/hooks/swr.ts' },
  'tanstack-query': { output: './src/amentum-space-aviation-radiation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amentum-space-aviation-radiation/hooks/preact-query.ts' },
  'solid-query': { output: './src/amentum-space-aviation-radiation/hooks/solid-query.ts' },
  'vue-query': { output: './src/amentum-space-aviation-radiation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amentum-space-aviation-radiation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amentum-space-aviation-radiation/hooks/angular-query.ts' },
  docs: {
    output: './src/amentum-space-aviation-radiation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
