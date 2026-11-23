import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/webflow.com/2023-03-01T164537Z/openapi.yaml',
  output: './src/webflow/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/webflow/types.ts' },
  client: { output: './src/webflow/client.ts', baseUrl: '/' },
  rpc: { output: './src/webflow/rpc.ts', parseResponse: true },
  swr: { output: './src/webflow/hooks/swr.ts' },
  'tanstack-query': { output: './src/webflow/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/webflow/hooks/preact-query.ts' },
  'solid-query': { output: './src/webflow/hooks/solid-query.ts' },
  'vue-query': { output: './src/webflow/hooks/vue-query.ts' },
  'svelte-query': { output: './src/webflow/hooks/svelte-query.ts' },
  'angular-query': { output: './src/webflow/hooks/angular-query.ts' },
  docs: {
    output: './src/webflow/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
