import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mppmc/3.0.0/openapi.yaml',
  output: './src/mppmc/routes.ts',
  template: {},
  type: { output: './src/mppmc/types.ts' },
  client: { output: './src/mppmc/client.ts', baseUrl: '/' },
  rpc: { output: './src/mppmc/rpc.ts', parseResponse: true },
  swr: { output: './src/mppmc/hooks/swr.ts' },
  'tanstack-query': { output: './src/mppmc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mppmc/hooks/preact-query.ts' },
  'solid-query': { output: './src/mppmc/hooks/solid-query.ts' },
  'vue-query': { output: './src/mppmc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mppmc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mppmc/hooks/angular-query.ts' },
  docs: {
    output: './src/mppmc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
