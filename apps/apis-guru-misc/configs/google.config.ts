import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/google.com/v3/openapi.yaml',
  output: './src/google/routes.ts',
  template: {},
  type: { output: './src/google/types.ts' },
  client: { output: './src/google/client.ts', baseUrl: '/' },
  rpc: { output: './src/google/rpc.ts', parseResponse: true },
  swr: { output: './src/google/hooks/swr.ts' },
  'tanstack-query': { output: './src/google/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/google/hooks/preact-query.ts' },
  'solid-query': { output: './src/google/hooks/solid-query.ts' },
  'vue-query': { output: './src/google/hooks/vue-query.ts' },
  'svelte-query': { output: './src/google/hooks/svelte-query.ts' },
  'angular-query': { output: './src/google/hooks/angular-query.ts' },
  docs: {
    output: './src/google/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
