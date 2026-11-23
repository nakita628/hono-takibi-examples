import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mturk-requester/2017-01-17/openapi.yaml',
  output: './src/mturk-requester/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mturk-requester/types.ts' },
  client: { output: './src/mturk-requester/client.ts', baseUrl: '/' },
  rpc: { output: './src/mturk-requester/rpc.ts', parseResponse: true },
  swr: { output: './src/mturk-requester/hooks/swr.ts' },
  'tanstack-query': { output: './src/mturk-requester/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mturk-requester/hooks/preact-query.ts' },
  'solid-query': { output: './src/mturk-requester/hooks/solid-query.ts' },
  'vue-query': { output: './src/mturk-requester/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mturk-requester/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mturk-requester/hooks/angular-query.ts' },
  docs: {
    output: './src/mturk-requester/api.md',
    curl: true,
    baseUrl: 'https://mturk-requester.us-east-1.amazonaws.com',
  },
})
