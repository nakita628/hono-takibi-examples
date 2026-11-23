import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/storecove.com/2.0.1/openapi.yaml',
  output: './src/storecove/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/storecove/types.ts' },
  client: { output: './src/storecove/client.ts', baseUrl: '/' },
  rpc: { output: './src/storecove/rpc.ts', parseResponse: true },
  swr: { output: './src/storecove/hooks/swr.ts' },
  'tanstack-query': { output: './src/storecove/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/storecove/hooks/preact-query.ts' },
  'solid-query': { output: './src/storecove/hooks/solid-query.ts' },
  'vue-query': { output: './src/storecove/hooks/vue-query.ts' },
  'svelte-query': { output: './src/storecove/hooks/svelte-query.ts' },
  'angular-query': { output: './src/storecove/hooks/angular-query.ts' },
  docs: {
    output: './src/storecove/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
