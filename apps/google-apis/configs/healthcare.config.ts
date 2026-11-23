import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/healthcare/v1beta1/openapi.yaml',
  output: './src/healthcare/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/healthcare/types.ts' },
  client: { output: './src/healthcare/client.ts', baseUrl: '/' },
  rpc: { output: './src/healthcare/rpc.ts', parseResponse: true },
  swr: { output: './src/healthcare/hooks/swr.ts' },
  'tanstack-query': { output: './src/healthcare/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/healthcare/hooks/preact-query.ts' },
  'solid-query': { output: './src/healthcare/hooks/solid-query.ts' },
  'vue-query': { output: './src/healthcare/hooks/vue-query.ts' },
  'svelte-query': { output: './src/healthcare/hooks/svelte-query.ts' },
  'angular-query': { output: './src/healthcare/hooks/angular-query.ts' },
  docs: {
    output: './src/healthcare/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
