import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/eventbridge/2015-10-07/openapi.yaml',
  output: './src/eventbridge/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/eventbridge/types.ts' },
  client: { output: './src/eventbridge/client.ts', baseUrl: '/' },
  rpc: { output: './src/eventbridge/rpc.ts', parseResponse: true },
  swr: { output: './src/eventbridge/hooks/swr.ts' },
  'tanstack-query': { output: './src/eventbridge/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/eventbridge/hooks/preact-query.ts' },
  'solid-query': { output: './src/eventbridge/hooks/solid-query.ts' },
  'vue-query': { output: './src/eventbridge/hooks/vue-query.ts' },
  'svelte-query': { output: './src/eventbridge/hooks/svelte-query.ts' },
  'angular-query': { output: './src/eventbridge/hooks/angular-query.ts' },
  docs: {
    output: './src/eventbridge/api.md',
    curl: true,
    baseUrl: 'https://eventbridge.us-east-1.amazonaws.com',
  },
})
