import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/configcat.com/v1/openapi.yaml',
  output: './src/configcat/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/configcat/types.ts' },
  client: { output: './src/configcat/client.ts', baseUrl: '/' },
  rpc: { output: './src/configcat/rpc.ts', parseResponse: true },
  swr: { output: './src/configcat/hooks/swr.ts' },
  'tanstack-query': { output: './src/configcat/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/configcat/hooks/preact-query.ts' },
  'solid-query': { output: './src/configcat/hooks/solid-query.ts' },
  'vue-query': { output: './src/configcat/hooks/vue-query.ts' },
  'svelte-query': { output: './src/configcat/hooks/svelte-query.ts' },
  'angular-query': { output: './src/configcat/hooks/angular-query.ts' },
  docs: {
    output: './src/configcat/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
