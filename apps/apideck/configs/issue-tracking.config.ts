import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/issue-tracking/9.3.0/openapi.yaml',
  output: './src/issue-tracking/routes.ts',
  template: {},
  type: { output: './src/issue-tracking/types.ts' },
  client: { output: './src/issue-tracking/client.ts', baseUrl: '/' },
  rpc: { output: './src/issue-tracking/rpc.ts', parseResponse: true },
  swr: { output: './src/issue-tracking/hooks/swr.ts' },
  'tanstack-query': { output: './src/issue-tracking/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/issue-tracking/hooks/preact-query.ts' },
  'solid-query': { output: './src/issue-tracking/hooks/solid-query.ts' },
  'vue-query': { output: './src/issue-tracking/hooks/vue-query.ts' },
  'svelte-query': { output: './src/issue-tracking/hooks/svelte-query.ts' },
  'angular-query': { output: './src/issue-tracking/hooks/angular-query.ts' },
  docs: {
    output: './src/issue-tracking/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
