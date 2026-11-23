import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/fcm/v1/openapi.yaml',
  output: './src/fcm/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fcm/types.ts' },
  client: { output: './src/fcm/client.ts', baseUrl: '/' },
  rpc: { output: './src/fcm/rpc.ts', parseResponse: true },
  swr: { output: './src/fcm/hooks/swr.ts' },
  'tanstack-query': { output: './src/fcm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fcm/hooks/preact-query.ts' },
  'solid-query': { output: './src/fcm/hooks/solid-query.ts' },
  'vue-query': { output: './src/fcm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fcm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fcm/hooks/angular-query.ts' },
  docs: {
    output: './src/fcm/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
