import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/displayvideo/v2/openapi.yaml',
  output: './src/displayvideo/routes.ts',
  template: {},
  type: { output: './src/displayvideo/types.ts' },
  client: { output: './src/displayvideo/client.ts', baseUrl: '/' },
  rpc: { output: './src/displayvideo/rpc.ts', parseResponse: true },
  swr: { output: './src/displayvideo/hooks/swr.ts' },
  'tanstack-query': { output: './src/displayvideo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/displayvideo/hooks/preact-query.ts' },
  'solid-query': { output: './src/displayvideo/hooks/solid-query.ts' },
  'vue-query': { output: './src/displayvideo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/displayvideo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/displayvideo/hooks/angular-query.ts' },
  docs: {
    output: './src/displayvideo/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
