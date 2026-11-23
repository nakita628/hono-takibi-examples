import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clever.com/1.2.0/openapi.yaml',
  output: './src/clever/routes.ts',
  template: {},
  type: { output: './src/clever/types.ts' },
  client: { output: './src/clever/client.ts', baseUrl: '/' },
  rpc: { output: './src/clever/rpc.ts', parseResponse: true },
  swr: { output: './src/clever/hooks/swr.ts' },
  'tanstack-query': { output: './src/clever/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clever/hooks/preact-query.ts' },
  'solid-query': { output: './src/clever/hooks/solid-query.ts' },
  'vue-query': { output: './src/clever/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clever/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clever/hooks/angular-query.ts' },
  docs: {
    output: './src/clever/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
