import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/androidpublisher/v3/openapi.yaml',
  output: './src/androidpublisher/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/androidpublisher/types.ts' },
  client: { output: './src/androidpublisher/client.ts', baseUrl: '/' },
  rpc: { output: './src/androidpublisher/rpc.ts', parseResponse: true },
  swr: { output: './src/androidpublisher/hooks/swr.ts' },
  'tanstack-query': { output: './src/androidpublisher/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/androidpublisher/hooks/preact-query.ts' },
  'solid-query': { output: './src/androidpublisher/hooks/solid-query.ts' },
  'vue-query': { output: './src/androidpublisher/hooks/vue-query.ts' },
  'svelte-query': { output: './src/androidpublisher/hooks/svelte-query.ts' },
  'angular-query': { output: './src/androidpublisher/hooks/angular-query.ts' },
  docs: {
    output: './src/androidpublisher/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
