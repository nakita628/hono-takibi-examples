import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportdl/3.0.0/openapi.yaml',
  output: './src/transportdl/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transportdl/types.ts' },
  client: { output: './src/transportdl/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportdl/rpc.ts', parseResponse: true },
  swr: { output: './src/transportdl/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportdl/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportdl/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportdl/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportdl/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportdl/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportdl/hooks/angular-query.ts' },
  docs: {
    output: './src/transportdl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
