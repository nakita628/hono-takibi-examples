import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/automl/v1beta1/openapi.yaml',
  output: './src/automl/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/automl/types.ts' },
  client: { output: './src/automl/client.ts', baseUrl: '/' },
  rpc: { output: './src/automl/rpc.ts', parseResponse: true },
  swr: { output: './src/automl/hooks/swr.ts' },
  'tanstack-query': { output: './src/automl/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/automl/hooks/preact-query.ts' },
  'solid-query': { output: './src/automl/hooks/solid-query.ts' },
  'vue-query': { output: './src/automl/hooks/vue-query.ts' },
  'svelte-query': { output: './src/automl/hooks/svelte-query.ts' },
  'angular-query': { output: './src/automl/hooks/angular-query.ts' },
  docs: {
    output: './src/automl/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
