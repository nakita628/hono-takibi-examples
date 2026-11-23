import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/transcoder/v1/openapi.yaml',
  output: './src/transcoder/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transcoder/types.ts' },
  client: { output: './src/transcoder/client.ts', baseUrl: '/' },
  rpc: { output: './src/transcoder/rpc.ts', parseResponse: true },
  swr: { output: './src/transcoder/hooks/swr.ts' },
  'tanstack-query': { output: './src/transcoder/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transcoder/hooks/preact-query.ts' },
  'solid-query': { output: './src/transcoder/hooks/solid-query.ts' },
  'vue-query': { output: './src/transcoder/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transcoder/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transcoder/hooks/angular-query.ts' },
  docs: {
    output: './src/transcoder/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
