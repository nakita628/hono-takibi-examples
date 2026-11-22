import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hpsbys/3.0.0/openapi.yaml',
  output: './src/hpsbys/routes.ts',
  template: {},
  type: { output: './src/hpsbys/types.ts' },
  client: { output: './src/hpsbys/client.ts', baseUrl: '/' },
  rpc: { output: './src/hpsbys/rpc.ts', parseResponse: true },
  swr: { output: './src/hpsbys/hooks/swr.ts' },
  'tanstack-query': { output: './src/hpsbys/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hpsbys/hooks/preact-query.ts' },
  'solid-query': { output: './src/hpsbys/hooks/solid-query.ts' },
  'vue-query': { output: './src/hpsbys/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hpsbys/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hpsbys/hooks/angular-query.ts' },
  docs: {
    output: './src/hpsbys/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
