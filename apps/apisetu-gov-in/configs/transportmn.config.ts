import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportmn/3.0.0/openapi.yaml',
  output: './src/transportmn/routes.ts',
  template: {},
  type: { output: './src/transportmn/types.ts' },
  client: { output: './src/transportmn/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportmn/rpc.ts', parseResponse: true },
  swr: { output: './src/transportmn/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportmn/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportmn/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportmn/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportmn/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportmn/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportmn/hooks/angular-query.ts' },
  docs: {
    output: './src/transportmn/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
