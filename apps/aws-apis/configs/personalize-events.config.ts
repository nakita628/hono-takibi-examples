import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/personalize-events/2018-03-22/openapi.yaml',
  output: './src/personalize-events/routes.ts',
  template: {},
  type: { output: './src/personalize-events/types.ts' },
  client: { output: './src/personalize-events/client.ts', baseUrl: '/' },
  rpc: { output: './src/personalize-events/rpc.ts', parseResponse: true },
  swr: { output: './src/personalize-events/hooks/swr.ts' },
  'tanstack-query': { output: './src/personalize-events/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/personalize-events/hooks/preact-query.ts' },
  'solid-query': { output: './src/personalize-events/hooks/solid-query.ts' },
  'vue-query': { output: './src/personalize-events/hooks/vue-query.ts' },
  'svelte-query': { output: './src/personalize-events/hooks/svelte-query.ts' },
  'angular-query': { output: './src/personalize-events/hooks/angular-query.ts' },
  docs: {
    output: './src/personalize-events/api.md',
    curl: true,
    baseUrl: 'https://personalize-events.us-east-1.amazonaws.com',
  },
})
