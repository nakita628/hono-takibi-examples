import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/journy.io/1.0.0/openapi.yaml',
  output: './src/journy-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/journy-io/types.ts' },
  client: { output: './src/journy-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/journy-io/rpc.ts', parseResponse: true },
  swr: { output: './src/journy-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/journy-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/journy-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/journy-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/journy-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/journy-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/journy-io/hooks/angular-query.ts' },
  docs: {
    output: './src/journy-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
