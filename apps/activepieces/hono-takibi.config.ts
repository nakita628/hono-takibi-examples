import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Activepieces API, official OpenAPI spec:
  // https://github.com/activepieces/activepieces/blob/98c6c8e9750a6c38bff94913b1a3ee192e4f2065/docs/openapi.json
  input: 'https://raw.githubusercontent.com/activepieces/activepieces/main/docs/openapi.json',
  output: './src/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://cloud.activepieces.com/api',
  },
})
