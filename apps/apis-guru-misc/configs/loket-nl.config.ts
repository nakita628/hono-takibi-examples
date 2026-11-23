import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/loket.nl/V2/openapi.yaml',
  output: './src/loket-nl/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/loket-nl/types.ts' },
  client: { output: './src/loket-nl/client.ts', baseUrl: '/' },
  rpc: { output: './src/loket-nl/rpc.ts', parseResponse: true },
  swr: { output: './src/loket-nl/hooks/swr.ts' },
  'tanstack-query': { output: './src/loket-nl/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/loket-nl/hooks/preact-query.ts' },
  'solid-query': { output: './src/loket-nl/hooks/solid-query.ts' },
  'vue-query': { output: './src/loket-nl/hooks/vue-query.ts' },
  'svelte-query': { output: './src/loket-nl/hooks/svelte-query.ts' },
  'angular-query': { output: './src/loket-nl/hooks/angular-query.ts' },
  docs: {
    output: './src/loket-nl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
