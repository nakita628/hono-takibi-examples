import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Message-Center-API/1.0.0/openapi.yaml',
  output: './src/message-center-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/message-center-api/types.ts' },
  client: { output: './src/message-center-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/message-center-api/rpc.ts', parseResponse: true },
  swr: { output: './src/message-center-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/message-center-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/message-center-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/message-center-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/message-center-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/message-center-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/message-center-api/hooks/angular-query.ts' },
  docs: {
    output: './src/message-center-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
