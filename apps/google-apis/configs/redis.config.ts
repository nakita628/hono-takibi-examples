import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/redis/v1/openapi.yaml',
  output: './src/redis/routes.ts',
  template: {},
  type: { output: './src/redis/types.ts' },
  client: { output: './src/redis/client.ts', baseUrl: '/' },
  rpc: { output: './src/redis/rpc.ts', parseResponse: true },
  swr: { output: './src/redis/hooks/swr.ts' },
  'tanstack-query': { output: './src/redis/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/redis/hooks/preact-query.ts' },
  'solid-query': { output: './src/redis/hooks/solid-query.ts' },
  'vue-query': { output: './src/redis/hooks/vue-query.ts' },
  'svelte-query': { output: './src/redis/hooks/svelte-query.ts' },
  'angular-query': { output: './src/redis/hooks/angular-query.ts' },
  docs: {
    output: './src/redis/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
