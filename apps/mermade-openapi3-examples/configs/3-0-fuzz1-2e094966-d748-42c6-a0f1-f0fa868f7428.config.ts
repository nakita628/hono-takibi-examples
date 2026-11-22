import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/2e094966-d748-42c6-a0f1-f0fa868f7428.yaml',
  output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/routes.ts',
  template: {},
  type: { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/types.ts' },
  client: { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
