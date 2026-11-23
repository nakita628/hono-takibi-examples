import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/my-business/v4/openapi.yaml',
  output: './src/my-business/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/my-business/types.ts' },
  client: { output: './src/my-business/client.ts', baseUrl: '/' },
  rpc: { output: './src/my-business/rpc.ts', parseResponse: true },
  swr: { output: './src/my-business/hooks/swr.ts' },
  'tanstack-query': { output: './src/my-business/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/my-business/hooks/preact-query.ts' },
  'solid-query': { output: './src/my-business/hooks/solid-query.ts' },
  'vue-query': { output: './src/my-business/hooks/vue-query.ts' },
  'svelte-query': { output: './src/my-business/hooks/svelte-query.ts' },
  'angular-query': { output: './src/my-business/hooks/angular-query.ts' },
  docs: {
    output: './src/my-business/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
