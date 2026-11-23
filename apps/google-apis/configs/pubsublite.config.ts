import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/pubsublite/v1/openapi.yaml',
  output: './src/pubsublite/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pubsublite/types.ts' },
  client: { output: './src/pubsublite/client.ts', baseUrl: '/' },
  rpc: { output: './src/pubsublite/rpc.ts', parseResponse: true },
  swr: { output: './src/pubsublite/hooks/swr.ts' },
  'tanstack-query': { output: './src/pubsublite/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pubsublite/hooks/preact-query.ts' },
  'solid-query': { output: './src/pubsublite/hooks/solid-query.ts' },
  'vue-query': { output: './src/pubsublite/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pubsublite/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pubsublite/hooks/angular-query.ts' },
  docs: {
    output: './src/pubsublite/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
