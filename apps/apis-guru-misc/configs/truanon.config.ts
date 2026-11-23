import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/truanon.com/1.0.0/openapi.yaml',
  output: './src/truanon/routes.ts',
  template: {},
  type: { output: './src/truanon/types.ts' },
  client: { output: './src/truanon/client.ts', baseUrl: '/' },
  rpc: { output: './src/truanon/rpc.ts', parseResponse: true },
  swr: { output: './src/truanon/hooks/swr.ts' },
  'tanstack-query': { output: './src/truanon/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/truanon/hooks/preact-query.ts' },
  'solid-query': { output: './src/truanon/hooks/solid-query.ts' },
  'vue-query': { output: './src/truanon/hooks/vue-query.ts' },
  'svelte-query': { output: './src/truanon/hooks/svelte-query.ts' },
  'angular-query': { output: './src/truanon/hooks/angular-query.ts' },
  docs: {
    output: './src/truanon/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
