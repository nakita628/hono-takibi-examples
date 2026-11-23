import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/meshery.local/0.4.27/openapi.yaml',
  output: './src/meshery/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/meshery/types.ts' },
  client: { output: './src/meshery/client.ts', baseUrl: '/' },
  rpc: { output: './src/meshery/rpc.ts', parseResponse: true },
  swr: { output: './src/meshery/hooks/swr.ts' },
  'tanstack-query': { output: './src/meshery/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/meshery/hooks/preact-query.ts' },
  'solid-query': { output: './src/meshery/hooks/solid-query.ts' },
  'vue-query': { output: './src/meshery/hooks/vue-query.ts' },
  'svelte-query': { output: './src/meshery/hooks/svelte-query.ts' },
  'angular-query': { output: './src/meshery/hooks/angular-query.ts' },
  docs: {
    output: './src/meshery/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
