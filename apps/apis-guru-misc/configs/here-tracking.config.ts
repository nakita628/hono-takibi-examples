import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/here.com/tracking/2.1.191/openapi.yaml',
  output: './src/here-tracking/routes.ts',
  template: {},
  type: { output: './src/here-tracking/types.ts' },
  client: { output: './src/here-tracking/client.ts', baseUrl: '/' },
  rpc: { output: './src/here-tracking/rpc.ts', parseResponse: true },
  swr: { output: './src/here-tracking/hooks/swr.ts' },
  'tanstack-query': { output: './src/here-tracking/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/here-tracking/hooks/preact-query.ts' },
  'solid-query': { output: './src/here-tracking/hooks/solid-query.ts' },
  'vue-query': { output: './src/here-tracking/hooks/vue-query.ts' },
  'svelte-query': { output: './src/here-tracking/hooks/svelte-query.ts' },
  'angular-query': { output: './src/here-tracking/hooks/angular-query.ts' },
  docs: {
    output: './src/here-tracking/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
