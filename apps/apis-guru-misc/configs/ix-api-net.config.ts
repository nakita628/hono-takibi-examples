import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ix-api.net/2.1.0/openapi.yaml',
  output: './src/ix-api-net/routes.ts',
  template: {},
  type: { output: './src/ix-api-net/types.ts' },
  client: { output: './src/ix-api-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/ix-api-net/rpc.ts', parseResponse: true },
  swr: { output: './src/ix-api-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/ix-api-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ix-api-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/ix-api-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/ix-api-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ix-api-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ix-api-net/hooks/angular-query.ts' },
  docs: {
    output: './src/ix-api-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
