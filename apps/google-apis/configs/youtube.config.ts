import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/youtube/v3/openapi.yaml',
  output: './src/youtube/routes.ts',
  template: {},
  type: { output: './src/youtube/types.ts' },
  client: { output: './src/youtube/client.ts', baseUrl: '/' },
  rpc: { output: './src/youtube/rpc.ts', parseResponse: true },
  swr: { output: './src/youtube/hooks/swr.ts' },
  'tanstack-query': { output: './src/youtube/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/youtube/hooks/preact-query.ts' },
  'solid-query': { output: './src/youtube/hooks/solid-query.ts' },
  'vue-query': { output: './src/youtube/hooks/vue-query.ts' },
  'svelte-query': { output: './src/youtube/hooks/svelte-query.ts' },
  'angular-query': { output: './src/youtube/hooks/angular-query.ts' },
  docs: {
    output: './src/youtube/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
