import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/biapi.pro/2.0/openapi.yaml',
  output: './src/biapi-pro/routes.ts',
  template: {},
  type: { output: './src/biapi-pro/types.ts' },
  client: { output: './src/biapi-pro/client.ts', baseUrl: '/' },
  rpc: { output: './src/biapi-pro/rpc.ts', parseResponse: true },
  swr: { output: './src/biapi-pro/hooks/swr.ts' },
  'tanstack-query': { output: './src/biapi-pro/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/biapi-pro/hooks/preact-query.ts' },
  'solid-query': { output: './src/biapi-pro/hooks/solid-query.ts' },
  'vue-query': { output: './src/biapi-pro/hooks/vue-query.ts' },
  'svelte-query': { output: './src/biapi-pro/hooks/svelte-query.ts' },
  'angular-query': { output: './src/biapi-pro/hooks/angular-query.ts' },
  docs: {
    output: './src/biapi-pro/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
