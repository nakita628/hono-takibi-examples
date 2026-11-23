import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apple.com/app-store-connect/1.4.1/openapi.yaml',
  output: './src/apple-app-store-connect/routes.ts',
  template: {},
  type: { output: './src/apple-app-store-connect/types.ts' },
  client: { output: './src/apple-app-store-connect/client.ts', baseUrl: '/' },
  rpc: { output: './src/apple-app-store-connect/rpc.ts', parseResponse: true },
  swr: { output: './src/apple-app-store-connect/hooks/swr.ts' },
  'tanstack-query': { output: './src/apple-app-store-connect/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apple-app-store-connect/hooks/preact-query.ts' },
  'solid-query': { output: './src/apple-app-store-connect/hooks/solid-query.ts' },
  'vue-query': { output: './src/apple-app-store-connect/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apple-app-store-connect/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apple-app-store-connect/hooks/angular-query.ts' },
  docs: {
    output: './src/apple-app-store-connect/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
