import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/drive/v3/openapi.yaml',
  output: './src/drive/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/drive/types.ts' },
  client: { output: './src/drive/client.ts', baseUrl: '/' },
  rpc: { output: './src/drive/rpc.ts', parseResponse: true },
  swr: { output: './src/drive/hooks/swr.ts' },
  'tanstack-query': { output: './src/drive/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/drive/hooks/preact-query.ts' },
  'solid-query': { output: './src/drive/hooks/solid-query.ts' },
  'vue-query': { output: './src/drive/hooks/vue-query.ts' },
  'svelte-query': { output: './src/drive/hooks/svelte-query.ts' },
  'angular-query': { output: './src/drive/hooks/angular-query.ts' },
  docs: {
    output: './src/drive/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
