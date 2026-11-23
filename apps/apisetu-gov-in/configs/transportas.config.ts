import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportas/3.0.0/openapi.yaml',
  output: './src/transportas/routes.ts',
  template: {},
  type: { output: './src/transportas/types.ts' },
  client: { output: './src/transportas/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportas/rpc.ts', parseResponse: true },
  swr: { output: './src/transportas/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportas/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportas/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportas/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportas/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportas/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportas/hooks/angular-query.ts' },
  docs: {
    output: './src/transportas/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
