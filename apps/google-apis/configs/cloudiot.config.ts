import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudiot/v1/openapi.yaml',
  output: './src/cloudiot/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudiot/types.ts' },
  client: { output: './src/cloudiot/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudiot/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudiot/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudiot/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudiot/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudiot/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudiot/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudiot/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudiot/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudiot/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
