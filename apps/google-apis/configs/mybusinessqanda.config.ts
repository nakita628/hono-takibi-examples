import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessqanda/v1/openapi.yaml',
  output: './src/mybusinessqanda/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mybusinessqanda/types.ts' },
  client: { output: './src/mybusinessqanda/client.ts', baseUrl: '/' },
  rpc: { output: './src/mybusinessqanda/rpc.ts', parseResponse: true },
  swr: { output: './src/mybusinessqanda/hooks/swr.ts' },
  'tanstack-query': { output: './src/mybusinessqanda/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mybusinessqanda/hooks/preact-query.ts' },
  'solid-query': { output: './src/mybusinessqanda/hooks/solid-query.ts' },
  'vue-query': { output: './src/mybusinessqanda/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mybusinessqanda/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mybusinessqanda/hooks/angular-query.ts' },
  docs: {
    output: './src/mybusinessqanda/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
