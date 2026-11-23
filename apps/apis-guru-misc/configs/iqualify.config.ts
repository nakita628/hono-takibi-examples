import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/iqualify.com/v1/openapi.yaml',
  output: './src/iqualify/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/iqualify/types.ts' },
  client: { output: './src/iqualify/client.ts', baseUrl: '/' },
  rpc: { output: './src/iqualify/rpc.ts', parseResponse: true },
  swr: { output: './src/iqualify/hooks/swr.ts' },
  'tanstack-query': { output: './src/iqualify/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iqualify/hooks/preact-query.ts' },
  'solid-query': { output: './src/iqualify/hooks/solid-query.ts' },
  'vue-query': { output: './src/iqualify/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iqualify/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iqualify/hooks/angular-query.ts' },
  docs: {
    output: './src/iqualify/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
