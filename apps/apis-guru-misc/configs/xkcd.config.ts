import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/xkcd.com/1.0.0/openapi.yaml',
  output: './src/xkcd/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/xkcd/types.ts' },
  client: { output: './src/xkcd/client.ts', baseUrl: '/' },
  rpc: { output: './src/xkcd/rpc.ts', parseResponse: true },
  swr: { output: './src/xkcd/hooks/swr.ts' },
  'tanstack-query': { output: './src/xkcd/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xkcd/hooks/preact-query.ts' },
  'solid-query': { output: './src/xkcd/hooks/solid-query.ts' },
  'vue-query': { output: './src/xkcd/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xkcd/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xkcd/hooks/angular-query.ts' },
  docs: {
    output: './src/xkcd/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
