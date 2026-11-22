import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/fsdhr/3.0.0/openapi.yaml',
  output: './src/fsdhr/routes.ts',
  template: {},
  type: { output: './src/fsdhr/types.ts' },
  client: { output: './src/fsdhr/client.ts', baseUrl: '/' },
  rpc: { output: './src/fsdhr/rpc.ts', parseResponse: true },
  swr: { output: './src/fsdhr/hooks/swr.ts' },
  'tanstack-query': { output: './src/fsdhr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fsdhr/hooks/preact-query.ts' },
  'solid-query': { output: './src/fsdhr/hooks/solid-query.ts' },
  'vue-query': { output: './src/fsdhr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fsdhr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fsdhr/hooks/angular-query.ts' },
  docs: {
    output: './src/fsdhr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
