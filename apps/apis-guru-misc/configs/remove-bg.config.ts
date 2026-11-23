import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/remove.bg/1.0.0/openapi.yaml',
  output: './src/remove-bg/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/remove-bg/types.ts' },
  client: { output: './src/remove-bg/client.ts', baseUrl: '/' },
  rpc: { output: './src/remove-bg/rpc.ts', parseResponse: true },
  swr: { output: './src/remove-bg/hooks/swr.ts' },
  'tanstack-query': { output: './src/remove-bg/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/remove-bg/hooks/preact-query.ts' },
  'solid-query': { output: './src/remove-bg/hooks/solid-query.ts' },
  'vue-query': { output: './src/remove-bg/hooks/vue-query.ts' },
  'svelte-query': { output: './src/remove-bg/hooks/svelte-query.ts' },
  'angular-query': { output: './src/remove-bg/hooks/angular-query.ts' },
  docs: {
    output: './src/remove-bg/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
