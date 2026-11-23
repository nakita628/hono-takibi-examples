import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportts/3.0.0/openapi.yaml',
  output: './src/transportts/routes.ts',
  template: {},
  type: { output: './src/transportts/types.ts' },
  client: { output: './src/transportts/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportts/rpc.ts', parseResponse: true },
  swr: { output: './src/transportts/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportts/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportts/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportts/hooks/angular-query.ts' },
  docs: {
    output: './src/transportts/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
