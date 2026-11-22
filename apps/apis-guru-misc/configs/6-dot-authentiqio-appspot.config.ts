import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/6-dot-authentiqio.appspot.com/6/openapi.yaml',
  output: './src/6-dot-authentiqio-appspot/routes.ts',
  template: {},
  type: { output: './src/6-dot-authentiqio-appspot/types.ts' },
  client: { output: './src/6-dot-authentiqio-appspot/client.ts', baseUrl: '/' },
  rpc: { output: './src/6-dot-authentiqio-appspot/rpc.ts', parseResponse: true },
  swr: { output: './src/6-dot-authentiqio-appspot/hooks/swr.ts' },
  'tanstack-query': { output: './src/6-dot-authentiqio-appspot/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/6-dot-authentiqio-appspot/hooks/preact-query.ts' },
  'solid-query': { output: './src/6-dot-authentiqio-appspot/hooks/solid-query.ts' },
  'vue-query': { output: './src/6-dot-authentiqio-appspot/hooks/vue-query.ts' },
  'svelte-query': { output: './src/6-dot-authentiqio-appspot/hooks/svelte-query.ts' },
  'angular-query': { output: './src/6-dot-authentiqio-appspot/hooks/angular-query.ts' },
  docs: {
    output: './src/6-dot-authentiqio-appspot/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
