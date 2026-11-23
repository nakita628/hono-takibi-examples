import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/artifactregistry/v1beta2/openapi.yaml',
  output: './src/artifactregistry/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/artifactregistry/types.ts' },
  client: { output: './src/artifactregistry/client.ts', baseUrl: '/' },
  rpc: { output: './src/artifactregistry/rpc.ts', parseResponse: true },
  swr: { output: './src/artifactregistry/hooks/swr.ts' },
  'tanstack-query': { output: './src/artifactregistry/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/artifactregistry/hooks/preact-query.ts' },
  'solid-query': { output: './src/artifactregistry/hooks/solid-query.ts' },
  'vue-query': { output: './src/artifactregistry/hooks/vue-query.ts' },
  'svelte-query': { output: './src/artifactregistry/hooks/svelte-query.ts' },
  'angular-query': { output: './src/artifactregistry/hooks/angular-query.ts' },
  docs: {
    output: './src/artifactregistry/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
