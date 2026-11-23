import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/motaword.com/1.0/openapi.yaml',
  output: './src/motaword/routes.ts',
  template: {},
  type: { output: './src/motaword/types.ts' },
  client: { output: './src/motaword/client.ts', baseUrl: '/' },
  rpc: { output: './src/motaword/rpc.ts', parseResponse: true },
  swr: { output: './src/motaword/hooks/swr.ts' },
  'tanstack-query': { output: './src/motaword/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/motaword/hooks/preact-query.ts' },
  'solid-query': { output: './src/motaword/hooks/solid-query.ts' },
  'vue-query': { output: './src/motaword/hooks/vue-query.ts' },
  'svelte-query': { output: './src/motaword/hooks/svelte-query.ts' },
  'angular-query': { output: './src/motaword/hooks/angular-query.ts' },
  docs: {
    output: './src/motaword/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
