import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/trello.com/1.0/openapi.yaml',
  output: './src/trello/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/trello/types.ts' },
  client: { output: './src/trello/client.ts', baseUrl: '/' },
  rpc: { output: './src/trello/rpc.ts', parseResponse: true },
  swr: { output: './src/trello/hooks/swr.ts' },
  'tanstack-query': { output: './src/trello/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/trello/hooks/preact-query.ts' },
  'solid-query': { output: './src/trello/hooks/solid-query.ts' },
  'vue-query': { output: './src/trello/hooks/vue-query.ts' },
  'svelte-query': { output: './src/trello/hooks/svelte-query.ts' },
  'angular-query': { output: './src/trello/hooks/angular-query.ts' },
  docs: {
    output: './src/trello/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
