import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/trakt.tv/1.0.0/openapi.yaml',
  output: './src/trakt-tv/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/trakt-tv/types.ts' },
  client: { output: './src/trakt-tv/client.ts', baseUrl: '/' },
  rpc: { output: './src/trakt-tv/rpc.ts', parseResponse: true },
  swr: { output: './src/trakt-tv/hooks/swr.ts' },
  'tanstack-query': { output: './src/trakt-tv/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/trakt-tv/hooks/preact-query.ts' },
  'solid-query': { output: './src/trakt-tv/hooks/solid-query.ts' },
  'vue-query': { output: './src/trakt-tv/hooks/vue-query.ts' },
  'svelte-query': { output: './src/trakt-tv/hooks/svelte-query.ts' },
  'angular-query': { output: './src/trakt-tv/hooks/angular-query.ts' },
  docs: {
    output: './src/trakt-tv/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
