import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/shoppers/1.0.0/openapi.yaml',
  output: './src/shoppers/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/shoppers/types.ts' },
  client: { output: './src/shoppers/client.ts', baseUrl: '/' },
  rpc: { output: './src/shoppers/rpc.ts', parseResponse: true },
  swr: { output: './src/shoppers/hooks/swr.ts' },
  'tanstack-query': { output: './src/shoppers/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shoppers/hooks/preact-query.ts' },
  'solid-query': { output: './src/shoppers/hooks/solid-query.ts' },
  'vue-query': { output: './src/shoppers/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shoppers/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shoppers/hooks/angular-query.ts' },
  docs: {
    output: './src/shoppers/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
