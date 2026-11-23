import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinesslodging/v1/openapi.yaml',
  output: './src/mybusinesslodging/routes.ts',
  template: {},
  type: { output: './src/mybusinesslodging/types.ts' },
  client: { output: './src/mybusinesslodging/client.ts', baseUrl: '/' },
  rpc: { output: './src/mybusinesslodging/rpc.ts', parseResponse: true },
  swr: { output: './src/mybusinesslodging/hooks/swr.ts' },
  'tanstack-query': { output: './src/mybusinesslodging/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mybusinesslodging/hooks/preact-query.ts' },
  'solid-query': { output: './src/mybusinesslodging/hooks/solid-query.ts' },
  'vue-query': { output: './src/mybusinesslodging/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mybusinesslodging/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mybusinesslodging/hooks/angular-query.ts' },
  docs: {
    output: './src/mybusinesslodging/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
