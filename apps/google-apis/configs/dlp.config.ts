import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dlp/v2/openapi.yaml',
  output: './src/dlp/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dlp/types.ts' },
  client: { output: './src/dlp/client.ts', baseUrl: '/' },
  rpc: { output: './src/dlp/rpc.ts', parseResponse: true },
  swr: { output: './src/dlp/hooks/swr.ts' },
  'tanstack-query': { output: './src/dlp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dlp/hooks/preact-query.ts' },
  'solid-query': { output: './src/dlp/hooks/solid-query.ts' },
  'vue-query': { output: './src/dlp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dlp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dlp/hooks/angular-query.ts' },
  docs: {
    output: './src/dlp/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
