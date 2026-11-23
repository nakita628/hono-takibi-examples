import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/vault/v1/openapi.yaml',
  output: './src/vault/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vault/types.ts' },
  client: { output: './src/vault/client.ts', baseUrl: '/' },
  rpc: { output: './src/vault/rpc.ts', parseResponse: true },
  swr: { output: './src/vault/hooks/swr.ts' },
  'tanstack-query': { output: './src/vault/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vault/hooks/preact-query.ts' },
  'solid-query': { output: './src/vault/hooks/solid-query.ts' },
  'vue-query': { output: './src/vault/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vault/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vault/hooks/angular-query.ts' },
  docs: {
    output: './src/vault/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
