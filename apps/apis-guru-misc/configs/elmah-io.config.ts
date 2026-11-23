import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/elmah.io/v3/openapi.yaml',
  output: './src/elmah-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/elmah-io/types.ts' },
  client: { output: './src/elmah-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/elmah-io/rpc.ts', parseResponse: true },
  swr: { output: './src/elmah-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/elmah-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elmah-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/elmah-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/elmah-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elmah-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elmah-io/hooks/angular-query.ts' },
  docs: {
    output: './src/elmah-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
