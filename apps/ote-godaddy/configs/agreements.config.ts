import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/agreements/1.0.0/openapi.yaml',
  output: './src/agreements/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/agreements/types.ts' },
  client: { output: './src/agreements/client.ts', baseUrl: '/' },
  rpc: { output: './src/agreements/rpc.ts', parseResponse: true },
  swr: { output: './src/agreements/hooks/swr.ts' },
  'tanstack-query': { output: './src/agreements/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/agreements/hooks/preact-query.ts' },
  'solid-query': { output: './src/agreements/hooks/solid-query.ts' },
  'vue-query': { output: './src/agreements/hooks/vue-query.ts' },
  'svelte-query': { output: './src/agreements/hooks/svelte-query.ts' },
  'angular-query': { output: './src/agreements/hooks/angular-query.ts' },
  docs: {
    output: './src/agreements/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
