import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/json2video.com/2.0.0/openapi.yaml',
  output: './src/json2video/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/json2video/types.ts' },
  client: { output: './src/json2video/client.ts', baseUrl: '/' },
  rpc: { output: './src/json2video/rpc.ts', parseResponse: true },
  swr: { output: './src/json2video/hooks/swr.ts' },
  'tanstack-query': { output: './src/json2video/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/json2video/hooks/preact-query.ts' },
  'solid-query': { output: './src/json2video/hooks/solid-query.ts' },
  'vue-query': { output: './src/json2video/hooks/vue-query.ts' },
  'svelte-query': { output: './src/json2video/hooks/svelte-query.ts' },
  'angular-query': { output: './src/json2video/hooks/angular-query.ts' },
  docs: {
    output: './src/json2video/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
