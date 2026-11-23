import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/apikeys/v2/openapi.yaml',
  output: './src/apikeys/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apikeys/types.ts' },
  client: { output: './src/apikeys/client.ts', baseUrl: '/' },
  rpc: { output: './src/apikeys/rpc.ts', parseResponse: true },
  swr: { output: './src/apikeys/hooks/swr.ts' },
  'tanstack-query': { output: './src/apikeys/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apikeys/hooks/preact-query.ts' },
  'solid-query': { output: './src/apikeys/hooks/solid-query.ts' },
  'vue-query': { output: './src/apikeys/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apikeys/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apikeys/hooks/angular-query.ts' },
  docs: {
    output: './src/apikeys/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
