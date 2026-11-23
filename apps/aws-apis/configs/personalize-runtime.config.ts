import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/personalize-runtime/2018-05-22/openapi.yaml',
  output: './src/personalize-runtime/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/personalize-runtime/types.ts' },
  client: { output: './src/personalize-runtime/client.ts', baseUrl: '/' },
  rpc: { output: './src/personalize-runtime/rpc.ts', parseResponse: true },
  swr: { output: './src/personalize-runtime/hooks/swr.ts' },
  'tanstack-query': { output: './src/personalize-runtime/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/personalize-runtime/hooks/preact-query.ts' },
  'solid-query': { output: './src/personalize-runtime/hooks/solid-query.ts' },
  'vue-query': { output: './src/personalize-runtime/hooks/vue-query.ts' },
  'svelte-query': { output: './src/personalize-runtime/hooks/svelte-query.ts' },
  'angular-query': { output: './src/personalize-runtime/hooks/angular-query.ts' },
  docs: {
    output: './src/personalize-runtime/api.md',
    curl: true,
    baseUrl: 'https://personalize-runtime.us-east-1.amazonaws.com',
  },
})
