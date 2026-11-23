import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/discourse.local/latest/openapi.yaml',
  output: './src/discourse/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/discourse/types.ts' },
  client: { output: './src/discourse/client.ts', baseUrl: '/' },
  rpc: { output: './src/discourse/rpc.ts', parseResponse: true },
  swr: { output: './src/discourse/hooks/swr.ts' },
  'tanstack-query': { output: './src/discourse/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/discourse/hooks/preact-query.ts' },
  'solid-query': { output: './src/discourse/hooks/solid-query.ts' },
  'vue-query': { output: './src/discourse/hooks/vue-query.ts' },
  'svelte-query': { output: './src/discourse/hooks/svelte-query.ts' },
  'angular-query': { output: './src/discourse/hooks/angular-query.ts' },
  docs: {
    output: './src/discourse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
