import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/service-quotas/2019-06-24/openapi.yaml',
  output: './src/service-quotas/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/service-quotas/types.ts' },
  client: { output: './src/service-quotas/client.ts', baseUrl: '/' },
  rpc: { output: './src/service-quotas/rpc.ts', parseResponse: true },
  swr: { output: './src/service-quotas/hooks/swr.ts' },
  'tanstack-query': { output: './src/service-quotas/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/service-quotas/hooks/preact-query.ts' },
  'solid-query': { output: './src/service-quotas/hooks/solid-query.ts' },
  'vue-query': { output: './src/service-quotas/hooks/vue-query.ts' },
  'svelte-query': { output: './src/service-quotas/hooks/svelte-query.ts' },
  'angular-query': { output: './src/service-quotas/hooks/angular-query.ts' },
  docs: {
    output: './src/service-quotas/api.md',
    curl: true,
    baseUrl: 'https://service-quotas.us-east-1.amazonaws.com',
  },
})
