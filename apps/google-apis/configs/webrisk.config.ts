import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/webrisk/v1/openapi.yaml',
  output: './src/webrisk/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/webrisk/types.ts' },
  client: { output: './src/webrisk/client.ts', baseUrl: '/' },
  rpc: { output: './src/webrisk/rpc.ts', parseResponse: true },
  swr: { output: './src/webrisk/hooks/swr.ts' },
  'tanstack-query': { output: './src/webrisk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/webrisk/hooks/preact-query.ts' },
  'solid-query': { output: './src/webrisk/hooks/solid-query.ts' },
  'vue-query': { output: './src/webrisk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/webrisk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/webrisk/hooks/angular-query.ts' },
  docs: {
    output: './src/webrisk/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
