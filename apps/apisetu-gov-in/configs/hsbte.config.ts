import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hsbte/3.0.0/openapi.yaml',
  output: './src/hsbte/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hsbte/types.ts' },
  client: { output: './src/hsbte/client.ts', baseUrl: '/' },
  rpc: { output: './src/hsbte/rpc.ts', parseResponse: true },
  swr: { output: './src/hsbte/hooks/swr.ts' },
  'tanstack-query': { output: './src/hsbte/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hsbte/hooks/preact-query.ts' },
  'solid-query': { output: './src/hsbte/hooks/solid-query.ts' },
  'vue-query': { output: './src/hsbte/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hsbte/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hsbte/hooks/angular-query.ts' },
  docs: {
    output: './src/hsbte/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
