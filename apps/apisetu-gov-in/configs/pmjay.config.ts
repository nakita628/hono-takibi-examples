import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pmjay/3.0.0/openapi.yaml',
  output: './src/pmjay/routes.ts',
  template: {},
  type: { output: './src/pmjay/types.ts' },
  client: { output: './src/pmjay/client.ts', baseUrl: '/' },
  rpc: { output: './src/pmjay/rpc.ts', parseResponse: true },
  swr: { output: './src/pmjay/hooks/swr.ts' },
  'tanstack-query': { output: './src/pmjay/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pmjay/hooks/preact-query.ts' },
  'solid-query': { output: './src/pmjay/hooks/solid-query.ts' },
  'vue-query': { output: './src/pmjay/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pmjay/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pmjay/hooks/angular-query.ts' },
  docs: {
    output: './src/pmjay/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
