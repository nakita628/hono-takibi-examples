import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/pubsub/v1beta2/openapi.yaml',
  output: './src/pubsub/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pubsub/types.ts' },
  client: { output: './src/pubsub/client.ts', baseUrl: '/' },
  rpc: { output: './src/pubsub/rpc.ts', parseResponse: true },
  swr: { output: './src/pubsub/hooks/swr.ts' },
  'tanstack-query': { output: './src/pubsub/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pubsub/hooks/preact-query.ts' },
  'solid-query': { output: './src/pubsub/hooks/solid-query.ts' },
  'vue-query': { output: './src/pubsub/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pubsub/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pubsub/hooks/angular-query.ts' },
  docs: {
    output: './src/pubsub/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
