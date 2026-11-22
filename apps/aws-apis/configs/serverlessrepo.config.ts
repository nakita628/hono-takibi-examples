import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/serverlessrepo/2017-09-08/openapi.yaml',
  output: './src/serverlessrepo/routes.ts',
  template: {},
  type: { output: './src/serverlessrepo/types.ts' },
  client: { output: './src/serverlessrepo/client.ts', baseUrl: '/' },
  rpc: { output: './src/serverlessrepo/rpc.ts', parseResponse: true },
  swr: { output: './src/serverlessrepo/hooks/swr.ts' },
  'tanstack-query': { output: './src/serverlessrepo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/serverlessrepo/hooks/preact-query.ts' },
  'solid-query': { output: './src/serverlessrepo/hooks/solid-query.ts' },
  'vue-query': { output: './src/serverlessrepo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/serverlessrepo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/serverlessrepo/hooks/angular-query.ts' },
  docs: {
    output: './src/serverlessrepo/api.md',
    curl: true,
    baseUrl: 'https://serverlessrepo.us-east-1.amazonaws.com',
  },
})
