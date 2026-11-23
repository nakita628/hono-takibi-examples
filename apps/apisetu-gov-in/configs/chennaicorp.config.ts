import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/chennaicorp/3.0.0/openapi.yaml',
  output: './src/chennaicorp/routes.ts',
  template: {},
  type: { output: './src/chennaicorp/types.ts' },
  client: { output: './src/chennaicorp/client.ts', baseUrl: '/' },
  rpc: { output: './src/chennaicorp/rpc.ts', parseResponse: true },
  swr: { output: './src/chennaicorp/hooks/swr.ts' },
  'tanstack-query': { output: './src/chennaicorp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/chennaicorp/hooks/preact-query.ts' },
  'solid-query': { output: './src/chennaicorp/hooks/solid-query.ts' },
  'vue-query': { output: './src/chennaicorp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/chennaicorp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/chennaicorp/hooks/angular-query.ts' },
  docs: {
    output: './src/chennaicorp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
