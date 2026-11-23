import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/swf/2012-01-25/openapi.yaml',
  output: './src/swf/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/swf/types.ts' },
  client: { output: './src/swf/client.ts', baseUrl: '/' },
  rpc: { output: './src/swf/rpc.ts', parseResponse: true },
  swr: { output: './src/swf/hooks/swr.ts' },
  'tanstack-query': { output: './src/swf/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/swf/hooks/preact-query.ts' },
  'solid-query': { output: './src/swf/hooks/solid-query.ts' },
  'vue-query': { output: './src/swf/hooks/vue-query.ts' },
  'svelte-query': { output: './src/swf/hooks/svelte-query.ts' },
  'angular-query': { output: './src/swf/hooks/angular-query.ts' },
  docs: {
    output: './src/swf/api.md',
    curl: true,
    baseUrl: 'https://swf.us-east-1.amazonaws.com',
  },
})
