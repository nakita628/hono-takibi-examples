import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stream-io-api.com/v79.19.1/openapi.yaml',
  output: './src/stream-io-api/routes.ts',
  template: {},
  type: { output: './src/stream-io-api/types.ts' },
  client: { output: './src/stream-io-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/stream-io-api/rpc.ts', parseResponse: true },
  swr: { output: './src/stream-io-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/stream-io-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/stream-io-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/stream-io-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/stream-io-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/stream-io-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/stream-io-api/hooks/angular-query.ts' },
  docs: {
    output: './src/stream-io-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
