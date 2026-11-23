import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/verifiedaccess/v2/openapi.yaml',
  output: './src/verifiedaccess/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/verifiedaccess/types.ts' },
  client: { output: './src/verifiedaccess/client.ts', baseUrl: '/' },
  rpc: { output: './src/verifiedaccess/rpc.ts', parseResponse: true },
  swr: { output: './src/verifiedaccess/hooks/swr.ts' },
  'tanstack-query': { output: './src/verifiedaccess/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/verifiedaccess/hooks/preact-query.ts' },
  'solid-query': { output: './src/verifiedaccess/hooks/solid-query.ts' },
  'vue-query': { output: './src/verifiedaccess/hooks/vue-query.ts' },
  'svelte-query': { output: './src/verifiedaccess/hooks/svelte-query.ts' },
  'angular-query': { output: './src/verifiedaccess/hooks/angular-query.ts' },
  docs: {
    output: './src/verifiedaccess/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
