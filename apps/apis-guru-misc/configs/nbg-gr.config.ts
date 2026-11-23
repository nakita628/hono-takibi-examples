import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nbg.gr/v3.1.5/openapi.yaml',
  output: './src/nbg-gr/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nbg-gr/types.ts' },
  client: { output: './src/nbg-gr/client.ts', baseUrl: '/' },
  rpc: { output: './src/nbg-gr/rpc.ts', parseResponse: true },
  swr: { output: './src/nbg-gr/hooks/swr.ts' },
  'tanstack-query': { output: './src/nbg-gr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nbg-gr/hooks/preact-query.ts' },
  'solid-query': { output: './src/nbg-gr/hooks/solid-query.ts' },
  'vue-query': { output: './src/nbg-gr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nbg-gr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nbg-gr/hooks/angular-query.ts' },
  docs: {
    output: './src/nbg-gr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
