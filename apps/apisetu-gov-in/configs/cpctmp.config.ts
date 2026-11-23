import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/cpctmp/3.0.0/openapi.yaml',
  output: './src/cpctmp/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cpctmp/types.ts' },
  client: { output: './src/cpctmp/client.ts', baseUrl: '/' },
  rpc: { output: './src/cpctmp/rpc.ts', parseResponse: true },
  swr: { output: './src/cpctmp/hooks/swr.ts' },
  'tanstack-query': { output: './src/cpctmp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cpctmp/hooks/preact-query.ts' },
  'solid-query': { output: './src/cpctmp/hooks/solid-query.ts' },
  'vue-query': { output: './src/cpctmp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cpctmp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cpctmp/hooks/angular-query.ts' },
  docs: {
    output: './src/cpctmp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
