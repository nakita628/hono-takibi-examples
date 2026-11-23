import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bigredcloud.com/v1/openapi.yaml',
  output: './src/bigredcloud/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bigredcloud/types.ts' },
  client: { output: './src/bigredcloud/client.ts', baseUrl: '/' },
  rpc: { output: './src/bigredcloud/rpc.ts', parseResponse: true },
  swr: { output: './src/bigredcloud/hooks/swr.ts' },
  'tanstack-query': { output: './src/bigredcloud/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bigredcloud/hooks/preact-query.ts' },
  'solid-query': { output: './src/bigredcloud/hooks/solid-query.ts' },
  'vue-query': { output: './src/bigredcloud/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bigredcloud/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bigredcloud/hooks/angular-query.ts' },
  docs: {
    output: './src/bigredcloud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
