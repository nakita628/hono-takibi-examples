import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/anchore.io/0.1.20/openapi.yaml',
  output: './src/anchore-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/anchore-io/types.ts' },
  client: { output: './src/anchore-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/anchore-io/rpc.ts', parseResponse: true },
  swr: { output: './src/anchore-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/anchore-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/anchore-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/anchore-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/anchore-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/anchore-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/anchore-io/hooks/angular-query.ts' },
  docs: {
    output: './src/anchore-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
