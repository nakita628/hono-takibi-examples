import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/workmailmessageflow/2019-05-01/openapi.yaml',
  output: './src/workmailmessageflow/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/workmailmessageflow/types.ts' },
  client: { output: './src/workmailmessageflow/client.ts', baseUrl: '/' },
  rpc: { output: './src/workmailmessageflow/rpc.ts', parseResponse: true },
  swr: { output: './src/workmailmessageflow/hooks/swr.ts' },
  'tanstack-query': { output: './src/workmailmessageflow/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/workmailmessageflow/hooks/preact-query.ts' },
  'solid-query': { output: './src/workmailmessageflow/hooks/solid-query.ts' },
  'vue-query': { output: './src/workmailmessageflow/hooks/vue-query.ts' },
  'svelte-query': { output: './src/workmailmessageflow/hooks/svelte-query.ts' },
  'angular-query': { output: './src/workmailmessageflow/hooks/angular-query.ts' },
  docs: {
    output: './src/workmailmessageflow/api.md',
    curl: true,
    baseUrl: 'https://workmailmessageflow.us-east-1.amazonaws.com',
  },
})
