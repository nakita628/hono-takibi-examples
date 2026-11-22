import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pressassociation.io/2.0/openapi.yaml',
  output: './src/pressassociation-io/routes.ts',
  template: {},
  type: { output: './src/pressassociation-io/types.ts' },
  client: { output: './src/pressassociation-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/pressassociation-io/rpc.ts', parseResponse: true },
  swr: { output: './src/pressassociation-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/pressassociation-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pressassociation-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/pressassociation-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/pressassociation-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pressassociation-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pressassociation-io/hooks/angular-query.ts' },
  docs: {
    output: './src/pressassociation-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
