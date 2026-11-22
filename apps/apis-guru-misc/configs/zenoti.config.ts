import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zenoti.com/1.0.0/openapi.yaml',
  output: './src/zenoti/routes.ts',
  template: {},
  type: { output: './src/zenoti/types.ts' },
  client: { output: './src/zenoti/client.ts', baseUrl: '/' },
  rpc: { output: './src/zenoti/rpc.ts', parseResponse: true },
  swr: { output: './src/zenoti/hooks/swr.ts' },
  'tanstack-query': { output: './src/zenoti/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/zenoti/hooks/preact-query.ts' },
  'solid-query': { output: './src/zenoti/hooks/solid-query.ts' },
  'vue-query': { output: './src/zenoti/hooks/vue-query.ts' },
  'svelte-query': { output: './src/zenoti/hooks/svelte-query.ts' },
  'angular-query': { output: './src/zenoti/hooks/angular-query.ts' },
  docs: {
    output: './src/zenoti/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
