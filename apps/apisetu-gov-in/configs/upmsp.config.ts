import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/upmsp/3.0.0/openapi.yaml',
  output: './src/upmsp/routes.ts',
  template: {},
  type: { output: './src/upmsp/types.ts' },
  client: { output: './src/upmsp/client.ts', baseUrl: '/' },
  rpc: { output: './src/upmsp/rpc.ts', parseResponse: true },
  swr: { output: './src/upmsp/hooks/swr.ts' },
  'tanstack-query': { output: './src/upmsp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/upmsp/hooks/preact-query.ts' },
  'solid-query': { output: './src/upmsp/hooks/solid-query.ts' },
  'vue-query': { output: './src/upmsp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/upmsp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/upmsp/hooks/angular-query.ts' },
  docs: {
    output: './src/upmsp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
