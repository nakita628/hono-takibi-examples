import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/playintegrity/v1/openapi.yaml',
  output: './src/playintegrity/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/playintegrity/types.ts' },
  client: { output: './src/playintegrity/client.ts', baseUrl: '/' },
  rpc: { output: './src/playintegrity/rpc.ts', parseResponse: true },
  swr: { output: './src/playintegrity/hooks/swr.ts' },
  'tanstack-query': { output: './src/playintegrity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/playintegrity/hooks/preact-query.ts' },
  'solid-query': { output: './src/playintegrity/hooks/solid-query.ts' },
  'vue-query': { output: './src/playintegrity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/playintegrity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/playintegrity/hooks/angular-query.ts' },
  docs: {
    output: './src/playintegrity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
