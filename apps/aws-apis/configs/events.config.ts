import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/events/2015-10-07/openapi.yaml',
  output: './src/events/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/events/types.ts' },
  client: { output: './src/events/client.ts', baseUrl: '/' },
  rpc: { output: './src/events/rpc.ts', parseResponse: true },
  swr: { output: './src/events/hooks/swr.ts' },
  'tanstack-query': { output: './src/events/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/events/hooks/preact-query.ts' },
  'solid-query': { output: './src/events/hooks/solid-query.ts' },
  'vue-query': { output: './src/events/hooks/vue-query.ts' },
  'svelte-query': { output: './src/events/hooks/svelte-query.ts' },
  'angular-query': { output: './src/events/hooks/angular-query.ts' },
  docs: {
    output: './src/events/api.md',
    curl: true,
    baseUrl: 'https://events.us-east-1.amazonaws.com',
  },
})
