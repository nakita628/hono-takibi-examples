import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/waf/2015-08-24/openapi.yaml',
  output: './src/waf/routes.ts',
  template: {},
  type: { output: './src/waf/types.ts' },
  client: { output: './src/waf/client.ts', baseUrl: '/' },
  rpc: { output: './src/waf/rpc.ts', parseResponse: true },
  swr: { output: './src/waf/hooks/swr.ts' },
  'tanstack-query': { output: './src/waf/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/waf/hooks/preact-query.ts' },
  'solid-query': { output: './src/waf/hooks/solid-query.ts' },
  'vue-query': { output: './src/waf/hooks/vue-query.ts' },
  'svelte-query': { output: './src/waf/hooks/svelte-query.ts' },
  'angular-query': { output: './src/waf/hooks/angular-query.ts' },
  docs: {
    output: './src/waf/api.md',
    curl: true,
    baseUrl: 'https://waf.us-east-1.amazonaws.com',
  },
})
