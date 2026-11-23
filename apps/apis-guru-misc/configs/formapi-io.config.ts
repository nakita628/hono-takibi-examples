import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/formapi.io/v1/openapi.yaml',
  output: './src/formapi-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/formapi-io/types.ts' },
  client: { output: './src/formapi-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/formapi-io/rpc.ts', parseResponse: true },
  swr: { output: './src/formapi-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/formapi-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/formapi-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/formapi-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/formapi-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/formapi-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/formapi-io/hooks/angular-query.ts' },
  docs: {
    output: './src/formapi-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
