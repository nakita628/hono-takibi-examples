import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/bigquerydatatransfer/v1/openapi.yaml',
  output: './src/bigquerydatatransfer/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bigquerydatatransfer/types.ts' },
  client: { output: './src/bigquerydatatransfer/client.ts', baseUrl: '/' },
  rpc: { output: './src/bigquerydatatransfer/rpc.ts', parseResponse: true },
  swr: { output: './src/bigquerydatatransfer/hooks/swr.ts' },
  'tanstack-query': { output: './src/bigquerydatatransfer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bigquerydatatransfer/hooks/preact-query.ts' },
  'solid-query': { output: './src/bigquerydatatransfer/hooks/solid-query.ts' },
  'vue-query': { output: './src/bigquerydatatransfer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bigquerydatatransfer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bigquerydatatransfer/hooks/angular-query.ts' },
  docs: {
    output: './src/bigquerydatatransfer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
