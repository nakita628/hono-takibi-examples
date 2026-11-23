import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/peoplegeneratorapi.live/v0/openapi.yaml',
  output: './src/peoplegeneratorapi-live/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/peoplegeneratorapi-live/types.ts' },
  client: { output: './src/peoplegeneratorapi-live/client.ts', baseUrl: '/' },
  rpc: { output: './src/peoplegeneratorapi-live/rpc.ts', parseResponse: true },
  swr: { output: './src/peoplegeneratorapi-live/hooks/swr.ts' },
  'tanstack-query': { output: './src/peoplegeneratorapi-live/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/peoplegeneratorapi-live/hooks/preact-query.ts' },
  'solid-query': { output: './src/peoplegeneratorapi-live/hooks/solid-query.ts' },
  'vue-query': { output: './src/peoplegeneratorapi-live/hooks/vue-query.ts' },
  'svelte-query': { output: './src/peoplegeneratorapi-live/hooks/svelte-query.ts' },
  'angular-query': { output: './src/peoplegeneratorapi-live/hooks/angular-query.ts' },
  docs: {
    output: './src/peoplegeneratorapi-live/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
