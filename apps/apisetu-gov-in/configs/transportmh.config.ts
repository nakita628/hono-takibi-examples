import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportmh/3.0.0/openapi.yaml',
  output: './src/transportmh/routes.ts',
  template: {},
  type: { output: './src/transportmh/types.ts' },
  client: { output: './src/transportmh/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportmh/rpc.ts', parseResponse: true },
  swr: { output: './src/transportmh/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportmh/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportmh/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportmh/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportmh/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportmh/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportmh/hooks/angular-query.ts' },
  docs: {
    output: './src/transportmh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
