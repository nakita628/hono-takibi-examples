import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/batch/v1/openapi.yaml',
  output: './src/batch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/batch/types.ts' },
  client: { output: './src/batch/client.ts', baseUrl: '/' },
  rpc: { output: './src/batch/rpc.ts', parseResponse: true },
  swr: { output: './src/batch/hooks/swr.ts' },
  'tanstack-query': { output: './src/batch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/batch/hooks/preact-query.ts' },
  'solid-query': { output: './src/batch/hooks/solid-query.ts' },
  'vue-query': { output: './src/batch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/batch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/batch/hooks/angular-query.ts' },
  docs: {
    output: './src/batch/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
