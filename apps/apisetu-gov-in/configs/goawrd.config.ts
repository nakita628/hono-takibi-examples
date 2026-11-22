import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/goawrd/3.0.0/openapi.yaml',
  output: './src/goawrd/routes.ts',
  template: {},
  type: { output: './src/goawrd/types.ts' },
  client: { output: './src/goawrd/client.ts', baseUrl: '/' },
  rpc: { output: './src/goawrd/rpc.ts', parseResponse: true },
  swr: { output: './src/goawrd/hooks/swr.ts' },
  'tanstack-query': { output: './src/goawrd/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/goawrd/hooks/preact-query.ts' },
  'solid-query': { output: './src/goawrd/hooks/solid-query.ts' },
  'vue-query': { output: './src/goawrd/hooks/vue-query.ts' },
  'svelte-query': { output: './src/goawrd/hooks/svelte-query.ts' },
  'angular-query': { output: './src/goawrd/hooks/angular-query.ts' },
  docs: {
    output: './src/goawrd/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
