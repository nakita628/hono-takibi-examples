import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/pinpoint/2016-12-01/openapi.yaml',
  output: './src/pinpoint/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pinpoint/types.ts' },
  client: { output: './src/pinpoint/client.ts', baseUrl: '/' },
  rpc: { output: './src/pinpoint/rpc.ts', parseResponse: true },
  swr: { output: './src/pinpoint/hooks/swr.ts' },
  'tanstack-query': { output: './src/pinpoint/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pinpoint/hooks/preact-query.ts' },
  'solid-query': { output: './src/pinpoint/hooks/solid-query.ts' },
  'vue-query': { output: './src/pinpoint/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pinpoint/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pinpoint/hooks/angular-query.ts' },
  docs: {
    output: './src/pinpoint/api.md',
    curl: true,
    baseUrl: 'https://pinpoint.us-east-1.amazonaws.com',
  },
})
