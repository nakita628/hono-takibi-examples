import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apache.org/2.5.1/openapi.yaml',
  output: './src/apache-org/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apache-org/types.ts' },
  client: { output: './src/apache-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/apache-org/rpc.ts', parseResponse: true },
  swr: { output: './src/apache-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/apache-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apache-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/apache-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/apache-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apache-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apache-org/hooks/angular-query.ts' },
  docs: {
    output: './src/apache-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
