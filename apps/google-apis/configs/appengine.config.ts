import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/appengine/v1beta/openapi.yaml',
  output: './src/appengine/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/appengine/types.ts' },
  client: { output: './src/appengine/client.ts', baseUrl: '/' },
  rpc: { output: './src/appengine/rpc.ts', parseResponse: true },
  swr: { output: './src/appengine/hooks/swr.ts' },
  'tanstack-query': { output: './src/appengine/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/appengine/hooks/preact-query.ts' },
  'solid-query': { output: './src/appengine/hooks/solid-query.ts' },
  'vue-query': { output: './src/appengine/hooks/vue-query.ts' },
  'svelte-query': { output: './src/appengine/hooks/svelte-query.ts' },
  'angular-query': { output: './src/appengine/hooks/angular-query.ts' },
  docs: {
    output: './src/appengine/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
