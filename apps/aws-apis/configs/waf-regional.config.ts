import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/waf-regional/2016-11-28/openapi.yaml',
  output: './src/waf-regional/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/waf-regional/types.ts' },
  client: { output: './src/waf-regional/client.ts', baseUrl: '/' },
  rpc: { output: './src/waf-regional/rpc.ts', parseResponse: true },
  swr: { output: './src/waf-regional/hooks/swr.ts' },
  'tanstack-query': { output: './src/waf-regional/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/waf-regional/hooks/preact-query.ts' },
  'solid-query': { output: './src/waf-regional/hooks/solid-query.ts' },
  'vue-query': { output: './src/waf-regional/hooks/vue-query.ts' },
  'svelte-query': { output: './src/waf-regional/hooks/svelte-query.ts' },
  'angular-query': { output: './src/waf-regional/hooks/angular-query.ts' },
  docs: {
    output: './src/waf-regional/api.md',
    curl: true,
    baseUrl: 'https://waf-regional.us-east-1.amazonaws.com',
  },
})
