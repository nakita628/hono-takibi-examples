import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/shakespeare/1.5/openapi.yaml',
  output: './src/fungenerators-shakespeare/routes.ts',
  template: {},
  type: { output: './src/fungenerators-shakespeare/types.ts' },
  client: { output: './src/fungenerators-shakespeare/client.ts', baseUrl: '/' },
  rpc: { output: './src/fungenerators-shakespeare/rpc.ts', parseResponse: true },
  swr: { output: './src/fungenerators-shakespeare/hooks/swr.ts' },
  'tanstack-query': { output: './src/fungenerators-shakespeare/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fungenerators-shakespeare/hooks/preact-query.ts' },
  'solid-query': { output: './src/fungenerators-shakespeare/hooks/solid-query.ts' },
  'vue-query': { output: './src/fungenerators-shakespeare/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fungenerators-shakespeare/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fungenerators-shakespeare/hooks/angular-query.ts' },
  docs: {
    output: './src/fungenerators-shakespeare/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
