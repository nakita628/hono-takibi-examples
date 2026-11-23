import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/logoraisr.com/v1/openapi.yaml',
  output: './src/logoraisr/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/logoraisr/types.ts' },
  client: { output: './src/logoraisr/client.ts', baseUrl: '/' },
  rpc: { output: './src/logoraisr/rpc.ts', parseResponse: true },
  swr: { output: './src/logoraisr/hooks/swr.ts' },
  'tanstack-query': { output: './src/logoraisr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/logoraisr/hooks/preact-query.ts' },
  'solid-query': { output: './src/logoraisr/hooks/solid-query.ts' },
  'vue-query': { output: './src/logoraisr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/logoraisr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/logoraisr/hooks/angular-query.ts' },
  docs: {
    output: './src/logoraisr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
