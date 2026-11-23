import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessplaceactions/v1/openapi.yaml',
  output: './src/mybusinessplaceactions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mybusinessplaceactions/types.ts' },
  client: { output: './src/mybusinessplaceactions/client.ts', baseUrl: '/' },
  rpc: { output: './src/mybusinessplaceactions/rpc.ts', parseResponse: true },
  swr: { output: './src/mybusinessplaceactions/hooks/swr.ts' },
  'tanstack-query': { output: './src/mybusinessplaceactions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mybusinessplaceactions/hooks/preact-query.ts' },
  'solid-query': { output: './src/mybusinessplaceactions/hooks/solid-query.ts' },
  'vue-query': { output: './src/mybusinessplaceactions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mybusinessplaceactions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mybusinessplaceactions/hooks/angular-query.ts' },
  docs: {
    output: './src/mybusinessplaceactions/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
