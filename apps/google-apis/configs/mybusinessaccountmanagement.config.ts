import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessaccountmanagement/v1/openapi.yaml',
  output: './src/mybusinessaccountmanagement/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mybusinessaccountmanagement/types.ts' },
  client: { output: './src/mybusinessaccountmanagement/client.ts', baseUrl: '/' },
  rpc: { output: './src/mybusinessaccountmanagement/rpc.ts', parseResponse: true },
  swr: { output: './src/mybusinessaccountmanagement/hooks/swr.ts' },
  'tanstack-query': { output: './src/mybusinessaccountmanagement/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mybusinessaccountmanagement/hooks/preact-query.ts' },
  'solid-query': { output: './src/mybusinessaccountmanagement/hooks/solid-query.ts' },
  'vue-query': { output: './src/mybusinessaccountmanagement/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mybusinessaccountmanagement/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mybusinessaccountmanagement/hooks/angular-query.ts' },
  docs: {
    output: './src/mybusinessaccountmanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
