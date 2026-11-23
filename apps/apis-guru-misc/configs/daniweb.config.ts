import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/daniweb.com/4/openapi.yaml',
  output: './src/daniweb/routes.ts',
  template: {},
  type: { output: './src/daniweb/types.ts' },
  client: { output: './src/daniweb/client.ts', baseUrl: '/' },
  rpc: { output: './src/daniweb/rpc.ts', parseResponse: true },
  swr: { output: './src/daniweb/hooks/swr.ts' },
  'tanstack-query': { output: './src/daniweb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/daniweb/hooks/preact-query.ts' },
  'solid-query': { output: './src/daniweb/hooks/solid-query.ts' },
  'vue-query': { output: './src/daniweb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/daniweb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/daniweb/hooks/angular-query.ts' },
  docs: {
    output: './src/daniweb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
