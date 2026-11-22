import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/webmasters/v3/openapi.yaml',
  output: './src/webmasters/routes.ts',
  template: {},
  type: { output: './src/webmasters/types.ts' },
  client: { output: './src/webmasters/client.ts', baseUrl: '/' },
  rpc: { output: './src/webmasters/rpc.ts', parseResponse: true },
  swr: { output: './src/webmasters/hooks/swr.ts' },
  'tanstack-query': { output: './src/webmasters/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/webmasters/hooks/preact-query.ts' },
  'solid-query': { output: './src/webmasters/hooks/solid-query.ts' },
  'vue-query': { output: './src/webmasters/hooks/vue-query.ts' },
  'svelte-query': { output: './src/webmasters/hooks/svelte-query.ts' },
  'angular-query': { output: './src/webmasters/hooks/angular-query.ts' },
  docs: {
    output: './src/webmasters/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
