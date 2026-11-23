import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/pos/9.3.0/openapi.yaml',
  output: './src/pos/routes.ts',
  template: {},
  type: { output: './src/pos/types.ts' },
  client: { output: './src/pos/client.ts', baseUrl: '/' },
  rpc: { output: './src/pos/rpc.ts', parseResponse: true },
  swr: { output: './src/pos/hooks/swr.ts' },
  'tanstack-query': { output: './src/pos/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pos/hooks/preact-query.ts' },
  'solid-query': { output: './src/pos/hooks/solid-query.ts' },
  'vue-query': { output: './src/pos/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pos/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pos/hooks/angular-query.ts' },
  docs: {
    output: './src/pos/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
