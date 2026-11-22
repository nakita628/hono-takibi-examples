import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/nascar-v2/1.0/openapi.yaml',
  output: './src/nascar-v2/routes.ts',
  template: {},
  type: { output: './src/nascar-v2/types.ts' },
  client: { output: './src/nascar-v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/nascar-v2/rpc.ts', parseResponse: true },
  swr: { output: './src/nascar-v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/nascar-v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nascar-v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/nascar-v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/nascar-v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nascar-v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nascar-v2/hooks/angular-query.ts' },
  docs: {
    output: './src/nascar-v2/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
