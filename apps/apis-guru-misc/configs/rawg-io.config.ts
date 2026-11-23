import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rawg.io/v1.0/openapi.yaml',
  output: './src/rawg-io/routes.ts',
  template: {},
  type: { output: './src/rawg-io/types.ts' },
  client: { output: './src/rawg-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/rawg-io/rpc.ts', parseResponse: true },
  swr: { output: './src/rawg-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/rawg-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rawg-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/rawg-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/rawg-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rawg-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rawg-io/hooks/angular-query.ts' },
  docs: {
    output: './src/rawg-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
