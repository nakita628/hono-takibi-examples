import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/viator.com/1.0.0/openapi.yaml',
  output: './src/viator/routes.ts',
  template: {},
  type: { output: './src/viator/types.ts' },
  client: { output: './src/viator/client.ts', baseUrl: '/' },
  rpc: { output: './src/viator/rpc.ts', parseResponse: true },
  swr: { output: './src/viator/hooks/swr.ts' },
  'tanstack-query': { output: './src/viator/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/viator/hooks/preact-query.ts' },
  'solid-query': { output: './src/viator/hooks/solid-query.ts' },
  'vue-query': { output: './src/viator/hooks/vue-query.ts' },
  'svelte-query': { output: './src/viator/hooks/svelte-query.ts' },
  'angular-query': { output: './src/viator/hooks/angular-query.ts' },
  docs: {
    output: './src/viator/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
