import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/smart-me.com/v1/openapi.yaml',
  output: './src/smart-me/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/smart-me/types.ts' },
  client: { output: './src/smart-me/client.ts', baseUrl: '/' },
  rpc: { output: './src/smart-me/rpc.ts', parseResponse: true },
  swr: { output: './src/smart-me/hooks/swr.ts' },
  'tanstack-query': { output: './src/smart-me/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/smart-me/hooks/preact-query.ts' },
  'solid-query': { output: './src/smart-me/hooks/solid-query.ts' },
  'vue-query': { output: './src/smart-me/hooks/vue-query.ts' },
  'svelte-query': { output: './src/smart-me/hooks/svelte-query.ts' },
  'angular-query': { output: './src/smart-me/hooks/angular-query.ts' },
  docs: {
    output: './src/smart-me/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
