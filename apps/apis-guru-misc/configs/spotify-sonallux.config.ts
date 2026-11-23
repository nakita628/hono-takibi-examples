import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/spotify.com/sonallux/2023.2.27/openapi.yaml',
  output: './src/spotify-sonallux/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/spotify-sonallux/types.ts' },
  client: { output: './src/spotify-sonallux/client.ts', baseUrl: '/' },
  rpc: { output: './src/spotify-sonallux/rpc.ts', parseResponse: true },
  swr: { output: './src/spotify-sonallux/hooks/swr.ts' },
  'tanstack-query': { output: './src/spotify-sonallux/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/spotify-sonallux/hooks/preact-query.ts' },
  'solid-query': { output: './src/spotify-sonallux/hooks/solid-query.ts' },
  'vue-query': { output: './src/spotify-sonallux/hooks/vue-query.ts' },
  'svelte-query': { output: './src/spotify-sonallux/hooks/svelte-query.ts' },
  'angular-query': { output: './src/spotify-sonallux/hooks/angular-query.ts' },
  docs: {
    output: './src/spotify-sonallux/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
