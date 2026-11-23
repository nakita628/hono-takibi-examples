import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessnotifications/v1/openapi.yaml',
  output: './src/mybusinessnotifications/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mybusinessnotifications/types.ts' },
  client: { output: './src/mybusinessnotifications/client.ts', baseUrl: '/' },
  rpc: { output: './src/mybusinessnotifications/rpc.ts', parseResponse: true },
  swr: { output: './src/mybusinessnotifications/hooks/swr.ts' },
  'tanstack-query': { output: './src/mybusinessnotifications/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mybusinessnotifications/hooks/preact-query.ts' },
  'solid-query': { output: './src/mybusinessnotifications/hooks/solid-query.ts' },
  'vue-query': { output: './src/mybusinessnotifications/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mybusinessnotifications/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mybusinessnotifications/hooks/angular-query.ts' },
  docs: {
    output: './src/mybusinessnotifications/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
