import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/acceleratedmobilepageurl/v1/openapi.yaml',
  output: './src/acceleratedmobilepageurl/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/acceleratedmobilepageurl/types.ts' },
  client: { output: './src/acceleratedmobilepageurl/client.ts', baseUrl: '/' },
  rpc: { output: './src/acceleratedmobilepageurl/rpc.ts', parseResponse: true },
  swr: { output: './src/acceleratedmobilepageurl/hooks/swr.ts' },
  'tanstack-query': { output: './src/acceleratedmobilepageurl/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/acceleratedmobilepageurl/hooks/preact-query.ts' },
  'solid-query': { output: './src/acceleratedmobilepageurl/hooks/solid-query.ts' },
  'vue-query': { output: './src/acceleratedmobilepageurl/hooks/vue-query.ts' },
  'svelte-query': { output: './src/acceleratedmobilepageurl/hooks/svelte-query.ts' },
  'angular-query': { output: './src/acceleratedmobilepageurl/hooks/angular-query.ts' },
  docs: {
    output: './src/acceleratedmobilepageurl/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
