import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/notebooks/v2/openapi.yaml',
  output: './src/notebooks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/notebooks/types.ts' },
  client: { output: './src/notebooks/client.ts', baseUrl: '/' },
  rpc: { output: './src/notebooks/rpc.ts', parseResponse: true },
  swr: { output: './src/notebooks/hooks/swr.ts' },
  'tanstack-query': { output: './src/notebooks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/notebooks/hooks/preact-query.ts' },
  'solid-query': { output: './src/notebooks/hooks/solid-query.ts' },
  'vue-query': { output: './src/notebooks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/notebooks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/notebooks/hooks/angular-query.ts' },
  docs: {
    output: './src/notebooks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
