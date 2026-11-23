import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/contentwarehouse/v1/openapi.yaml',
  output: './src/contentwarehouse/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/contentwarehouse/types.ts' },
  client: { output: './src/contentwarehouse/client.ts', baseUrl: '/' },
  rpc: { output: './src/contentwarehouse/rpc.ts', parseResponse: true },
  swr: { output: './src/contentwarehouse/hooks/swr.ts' },
  'tanstack-query': { output: './src/contentwarehouse/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/contentwarehouse/hooks/preact-query.ts' },
  'solid-query': { output: './src/contentwarehouse/hooks/solid-query.ts' },
  'vue-query': { output: './src/contentwarehouse/hooks/vue-query.ts' },
  'svelte-query': { output: './src/contentwarehouse/hooks/svelte-query.ts' },
  'angular-query': { output: './src/contentwarehouse/hooks/angular-query.ts' },
  docs: {
    output: './src/contentwarehouse/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
