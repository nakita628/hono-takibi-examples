import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/file/v1/openapi.yaml',
  output: './src/file/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/file/types.ts' },
  client: { output: './src/file/client.ts', baseUrl: '/' },
  rpc: { output: './src/file/rpc.ts', parseResponse: true },
  swr: { output: './src/file/hooks/swr.ts' },
  'tanstack-query': { output: './src/file/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/file/hooks/preact-query.ts' },
  'solid-query': { output: './src/file/hooks/solid-query.ts' },
  'vue-query': { output: './src/file/hooks/vue-query.ts' },
  'svelte-query': { output: './src/file/hooks/svelte-query.ts' },
  'angular-query': { output: './src/file/hooks/angular-query.ts' },
  docs: {
    output: './src/file/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
