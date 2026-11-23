import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/groundstation/2019-05-23/openapi.yaml',
  output: './src/groundstation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/groundstation/types.ts' },
  client: { output: './src/groundstation/client.ts', baseUrl: '/' },
  rpc: { output: './src/groundstation/rpc.ts', parseResponse: true },
  swr: { output: './src/groundstation/hooks/swr.ts' },
  'tanstack-query': { output: './src/groundstation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/groundstation/hooks/preact-query.ts' },
  'solid-query': { output: './src/groundstation/hooks/solid-query.ts' },
  'vue-query': { output: './src/groundstation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/groundstation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/groundstation/hooks/angular-query.ts' },
  docs: {
    output: './src/groundstation/api.md',
    curl: true,
    baseUrl: 'https://groundstation.us-east-1.amazonaws.com',
  },
})
