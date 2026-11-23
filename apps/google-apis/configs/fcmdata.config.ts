import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/fcmdata/v1beta1/openapi.yaml',
  output: './src/fcmdata/routes.ts',
  template: {},
  type: { output: './src/fcmdata/types.ts' },
  client: { output: './src/fcmdata/client.ts', baseUrl: '/' },
  rpc: { output: './src/fcmdata/rpc.ts', parseResponse: true },
  swr: { output: './src/fcmdata/hooks/swr.ts' },
  'tanstack-query': { output: './src/fcmdata/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fcmdata/hooks/preact-query.ts' },
  'solid-query': { output: './src/fcmdata/hooks/solid-query.ts' },
  'vue-query': { output: './src/fcmdata/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fcmdata/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fcmdata/hooks/angular-query.ts' },
  docs: {
    output: './src/fcmdata/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
