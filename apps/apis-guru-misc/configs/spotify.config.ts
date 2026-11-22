import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/spotify.com/1.0.0/openapi.yaml',
  output: './src/spotify/routes.ts',
  template: {},
  type: { output: './src/spotify/types.ts' },
  client: { output: './src/spotify/client.ts', baseUrl: '/' },
  rpc: { output: './src/spotify/rpc.ts', parseResponse: true },
  swr: { output: './src/spotify/hooks/swr.ts' },
  'tanstack-query': { output: './src/spotify/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/spotify/hooks/preact-query.ts' },
  'solid-query': { output: './src/spotify/hooks/solid-query.ts' },
  'vue-query': { output: './src/spotify/hooks/vue-query.ts' },
  'svelte-query': { output: './src/spotify/hooks/svelte-query.ts' },
  'angular-query': { output: './src/spotify/hooks/angular-query.ts' },
  docs: {
    output: './src/spotify/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
