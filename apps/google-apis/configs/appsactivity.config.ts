import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/appsactivity/v1/openapi.yaml',
  output: './src/appsactivity/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/appsactivity/types.ts' },
  client: { output: './src/appsactivity/client.ts', baseUrl: '/' },
  rpc: { output: './src/appsactivity/rpc.ts', parseResponse: true },
  swr: { output: './src/appsactivity/hooks/swr.ts' },
  'tanstack-query': { output: './src/appsactivity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/appsactivity/hooks/preact-query.ts' },
  'solid-query': { output: './src/appsactivity/hooks/solid-query.ts' },
  'vue-query': { output: './src/appsactivity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/appsactivity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/appsactivity/hooks/angular-query.ts' },
  docs: {
    output: './src/appsactivity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
