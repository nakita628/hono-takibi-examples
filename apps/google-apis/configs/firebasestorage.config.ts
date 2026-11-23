import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebasestorage/v1beta/openapi.yaml',
  output: './src/firebasestorage/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/firebasestorage/types.ts' },
  client: { output: './src/firebasestorage/client.ts', baseUrl: '/' },
  rpc: { output: './src/firebasestorage/rpc.ts', parseResponse: true },
  swr: { output: './src/firebasestorage/hooks/swr.ts' },
  'tanstack-query': { output: './src/firebasestorage/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firebasestorage/hooks/preact-query.ts' },
  'solid-query': { output: './src/firebasestorage/hooks/solid-query.ts' },
  'vue-query': { output: './src/firebasestorage/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firebasestorage/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firebasestorage/hooks/angular-query.ts' },
  docs: {
    output: './src/firebasestorage/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
