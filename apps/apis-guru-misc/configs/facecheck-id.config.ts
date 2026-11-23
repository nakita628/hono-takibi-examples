import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/facecheck.id/v1.02/openapi.yaml',
  output: './src/facecheck-id/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/facecheck-id/types.ts' },
  client: { output: './src/facecheck-id/client.ts', baseUrl: '/' },
  rpc: { output: './src/facecheck-id/rpc.ts', parseResponse: true },
  swr: { output: './src/facecheck-id/hooks/swr.ts' },
  'tanstack-query': { output: './src/facecheck-id/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/facecheck-id/hooks/preact-query.ts' },
  'solid-query': { output: './src/facecheck-id/hooks/solid-query.ts' },
  'vue-query': { output: './src/facecheck-id/hooks/vue-query.ts' },
  'svelte-query': { output: './src/facecheck-id/hooks/svelte-query.ts' },
  'angular-query': { output: './src/facecheck-id/hooks/angular-query.ts' },
  docs: {
    output: './src/facecheck-id/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
