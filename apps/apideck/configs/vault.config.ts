import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/vault/9.3.0/openapi.yaml',
  output: './src/vault/routes.ts',
  template: {},
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
    baseUrl: 'https://example.com',
  },
})
