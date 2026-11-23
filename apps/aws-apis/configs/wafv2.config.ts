import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/wafv2/2019-07-29/openapi.yaml',
  output: './src/wafv2/routes.ts',
  template: {},
  type: { output: './src/wafv2/types.ts' },
  client: { output: './src/wafv2/client.ts', baseUrl: '/' },
  rpc: { output: './src/wafv2/rpc.ts', parseResponse: true },
  swr: { output: './src/wafv2/hooks/swr.ts' },
  'tanstack-query': { output: './src/wafv2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wafv2/hooks/preact-query.ts' },
  'solid-query': { output: './src/wafv2/hooks/solid-query.ts' },
  'vue-query': { output: './src/wafv2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wafv2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wafv2/hooks/angular-query.ts' },
  docs: {
    output: './src/wafv2/api.md',
    curl: true,
    baseUrl: 'https://wafv2.us-east-1.amazonaws.com',
  },
})
