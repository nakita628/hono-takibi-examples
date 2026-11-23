import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bunq.com/1.0/openapi.yaml',
  output: './src/bunq/routes.ts',
  template: {},
  type: { output: './src/bunq/types.ts' },
  client: { output: './src/bunq/client.ts', baseUrl: '/' },
  rpc: { output: './src/bunq/rpc.ts', parseResponse: true },
  swr: { output: './src/bunq/hooks/swr.ts' },
  'tanstack-query': { output: './src/bunq/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bunq/hooks/preact-query.ts' },
  'solid-query': { output: './src/bunq/hooks/solid-query.ts' },
  'vue-query': { output: './src/bunq/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bunq/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bunq/hooks/angular-query.ts' },
  docs: {
    output: './src/bunq/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
