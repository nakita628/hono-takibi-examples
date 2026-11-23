import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/connectors/v2/openapi.yaml',
  output: './src/connectors/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/connectors/types.ts' },
  client: { output: './src/connectors/client.ts', baseUrl: '/' },
  rpc: { output: './src/connectors/rpc.ts', parseResponse: true },
  swr: { output: './src/connectors/hooks/swr.ts' },
  'tanstack-query': { output: './src/connectors/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/connectors/hooks/preact-query.ts' },
  'solid-query': { output: './src/connectors/hooks/solid-query.ts' },
  'vue-query': { output: './src/connectors/hooks/vue-query.ts' },
  'svelte-query': { output: './src/connectors/hooks/svelte-query.ts' },
  'angular-query': { output: './src/connectors/hooks/angular-query.ts' },
  docs: {
    output: './src/connectors/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
