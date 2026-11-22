import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/twitter.com/current/2.61/openapi.yaml',
  output: './src/twitter-current/routes.ts',
  template: {},
  type: { output: './src/twitter-current/types.ts' },
  client: { output: './src/twitter-current/client.ts', baseUrl: '/' },
  rpc: { output: './src/twitter-current/rpc.ts', parseResponse: true },
  swr: { output: './src/twitter-current/hooks/swr.ts' },
  'tanstack-query': { output: './src/twitter-current/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/twitter-current/hooks/preact-query.ts' },
  'solid-query': { output: './src/twitter-current/hooks/solid-query.ts' },
  'vue-query': { output: './src/twitter-current/hooks/vue-query.ts' },
  'svelte-query': { output: './src/twitter-current/hooks/svelte-query.ts' },
  'angular-query': { output: './src/twitter-current/hooks/angular-query.ts' },
  docs: {
    output: './src/twitter-current/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
