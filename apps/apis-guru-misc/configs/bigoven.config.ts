import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bigoven.com/partner/openapi.yaml',
  output: './src/bigoven/routes.ts',
  template: {},
  type: { output: './src/bigoven/types.ts' },
  client: { output: './src/bigoven/client.ts', baseUrl: '/' },
  rpc: { output: './src/bigoven/rpc.ts', parseResponse: true },
  swr: { output: './src/bigoven/hooks/swr.ts' },
  'tanstack-query': { output: './src/bigoven/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bigoven/hooks/preact-query.ts' },
  'solid-query': { output: './src/bigoven/hooks/solid-query.ts' },
  'vue-query': { output: './src/bigoven/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bigoven/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bigoven/hooks/angular-query.ts' },
  docs: {
    output: './src/bigoven/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
