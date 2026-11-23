import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stoplight.io/api-v1/openapi.yaml',
  output: './src/stoplight-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/stoplight-io/types.ts' },
  client: { output: './src/stoplight-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/stoplight-io/rpc.ts', parseResponse: true },
  swr: { output: './src/stoplight-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/stoplight-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/stoplight-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/stoplight-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/stoplight-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/stoplight-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/stoplight-io/hooks/angular-query.ts' },
  docs: {
    output: './src/stoplight-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
