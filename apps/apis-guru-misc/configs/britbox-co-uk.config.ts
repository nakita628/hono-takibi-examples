import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/britbox.co.uk/3.730.300-ref-1-39-0/openapi.yaml',
  output: './src/britbox-co-uk/routes.ts',
  template: {},
  type: { output: './src/britbox-co-uk/types.ts' },
  client: { output: './src/britbox-co-uk/client.ts', baseUrl: '/' },
  rpc: { output: './src/britbox-co-uk/rpc.ts', parseResponse: true },
  swr: { output: './src/britbox-co-uk/hooks/swr.ts' },
  'tanstack-query': { output: './src/britbox-co-uk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/britbox-co-uk/hooks/preact-query.ts' },
  'solid-query': { output: './src/britbox-co-uk/hooks/solid-query.ts' },
  'vue-query': { output: './src/britbox-co-uk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/britbox-co-uk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/britbox-co-uk/hooks/angular-query.ts' },
  docs: {
    output: './src/britbox-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
