import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/balldontlie.io/1.0.0/openapi.yaml',
  output: './src/balldontlie-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/balldontlie-io/types.ts' },
  client: { output: './src/balldontlie-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/balldontlie-io/rpc.ts', parseResponse: true },
  swr: { output: './src/balldontlie-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/balldontlie-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/balldontlie-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/balldontlie-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/balldontlie-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/balldontlie-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/balldontlie-io/hooks/angular-query.ts' },
  docs: {
    output: './src/balldontlie-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
