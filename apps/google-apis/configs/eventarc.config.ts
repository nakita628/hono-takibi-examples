import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/eventarc/v1beta1/openapi.yaml',
  output: './src/eventarc/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/eventarc/types.ts' },
  client: { output: './src/eventarc/client.ts', baseUrl: '/' },
  rpc: { output: './src/eventarc/rpc.ts', parseResponse: true },
  swr: { output: './src/eventarc/hooks/swr.ts' },
  'tanstack-query': { output: './src/eventarc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/eventarc/hooks/preact-query.ts' },
  'solid-query': { output: './src/eventarc/hooks/solid-query.ts' },
  'vue-query': { output: './src/eventarc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/eventarc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/eventarc/hooks/angular-query.ts' },
  docs: {
    output: './src/eventarc/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
