import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/doubleclicksearch/v2/openapi.yaml',
  output: './src/doubleclicksearch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/doubleclicksearch/types.ts' },
  client: { output: './src/doubleclicksearch/client.ts', baseUrl: '/' },
  rpc: { output: './src/doubleclicksearch/rpc.ts', parseResponse: true },
  swr: { output: './src/doubleclicksearch/hooks/swr.ts' },
  'tanstack-query': { output: './src/doubleclicksearch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/doubleclicksearch/hooks/preact-query.ts' },
  'solid-query': { output: './src/doubleclicksearch/hooks/solid-query.ts' },
  'vue-query': { output: './src/doubleclicksearch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/doubleclicksearch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/doubleclicksearch/hooks/angular-query.ts' },
  docs: {
    output: './src/doubleclicksearch/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
