import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/extpose.com/1.0.0/openapi.yaml',
  output: './src/extpose/routes.ts',
  template: {},
  type: { output: './src/extpose/types.ts' },
  client: { output: './src/extpose/client.ts', baseUrl: '/' },
  rpc: { output: './src/extpose/rpc.ts', parseResponse: true },
  swr: { output: './src/extpose/hooks/swr.ts' },
  'tanstack-query': { output: './src/extpose/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/extpose/hooks/preact-query.ts' },
  'solid-query': { output: './src/extpose/hooks/solid-query.ts' },
  'vue-query': { output: './src/extpose/hooks/vue-query.ts' },
  'svelte-query': { output: './src/extpose/hooks/svelte-query.ts' },
  'angular-query': { output: './src/extpose/hooks/angular-query.ts' },
  docs: {
    output: './src/extpose/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
