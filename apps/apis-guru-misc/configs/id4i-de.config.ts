import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/id4i.de/1.0.2/openapi.yaml',
  output: './src/id4i-de/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/id4i-de/types.ts' },
  client: { output: './src/id4i-de/client.ts', baseUrl: '/' },
  rpc: { output: './src/id4i-de/rpc.ts', parseResponse: true },
  swr: { output: './src/id4i-de/hooks/swr.ts' },
  'tanstack-query': { output: './src/id4i-de/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/id4i-de/hooks/preact-query.ts' },
  'solid-query': { output: './src/id4i-de/hooks/solid-query.ts' },
  'vue-query': { output: './src/id4i-de/hooks/vue-query.ts' },
  'svelte-query': { output: './src/id4i-de/hooks/svelte-query.ts' },
  'angular-query': { output: './src/id4i-de/hooks/angular-query.ts' },
  docs: {
    output: './src/id4i-de/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
