import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datacatalog/v1beta1/openapi.yaml',
  output: './src/datacatalog/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/datacatalog/types.ts' },
  client: { output: './src/datacatalog/client.ts', baseUrl: '/' },
  rpc: { output: './src/datacatalog/rpc.ts', parseResponse: true },
  swr: { output: './src/datacatalog/hooks/swr.ts' },
  'tanstack-query': { output: './src/datacatalog/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datacatalog/hooks/preact-query.ts' },
  'solid-query': { output: './src/datacatalog/hooks/solid-query.ts' },
  'vue-query': { output: './src/datacatalog/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datacatalog/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datacatalog/hooks/angular-query.ts' },
  docs: {
    output: './src/datacatalog/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
