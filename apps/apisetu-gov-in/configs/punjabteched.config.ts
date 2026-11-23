import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/punjabteched/3.0.0/openapi.yaml',
  output: './src/punjabteched/routes.ts',
  template: {},
  type: { output: './src/punjabteched/types.ts' },
  client: { output: './src/punjabteched/client.ts', baseUrl: '/' },
  rpc: { output: './src/punjabteched/rpc.ts', parseResponse: true },
  swr: { output: './src/punjabteched/hooks/swr.ts' },
  'tanstack-query': { output: './src/punjabteched/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/punjabteched/hooks/preact-query.ts' },
  'solid-query': { output: './src/punjabteched/hooks/solid-query.ts' },
  'vue-query': { output: './src/punjabteched/hooks/vue-query.ts' },
  'svelte-query': { output: './src/punjabteched/hooks/svelte-query.ts' },
  'angular-query': { output: './src/punjabteched/hooks/angular-query.ts' },
  docs: {
    output: './src/punjabteched/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
