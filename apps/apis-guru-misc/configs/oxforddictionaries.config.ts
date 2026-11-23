import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/oxforddictionaries.com/1.11.0/openapi.yaml',
  output: './src/oxforddictionaries/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/oxforddictionaries/types.ts' },
  client: { output: './src/oxforddictionaries/client.ts', baseUrl: '/' },
  rpc: { output: './src/oxforddictionaries/rpc.ts', parseResponse: true },
  swr: { output: './src/oxforddictionaries/hooks/swr.ts' },
  'tanstack-query': { output: './src/oxforddictionaries/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/oxforddictionaries/hooks/preact-query.ts' },
  'solid-query': { output: './src/oxforddictionaries/hooks/solid-query.ts' },
  'vue-query': { output: './src/oxforddictionaries/hooks/vue-query.ts' },
  'svelte-query': { output: './src/oxforddictionaries/hooks/svelte-query.ts' },
  'angular-query': { output: './src/oxforddictionaries/hooks/angular-query.ts' },
  docs: {
    output: './src/oxforddictionaries/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
