import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/jac/3.0.0/openapi.yaml',
  output: './src/jac/routes.ts',
  template: {},
  type: { output: './src/jac/types.ts' },
  client: { output: './src/jac/client.ts', baseUrl: '/' },
  rpc: { output: './src/jac/rpc.ts', parseResponse: true },
  swr: { output: './src/jac/hooks/swr.ts' },
  'tanstack-query': { output: './src/jac/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/jac/hooks/preact-query.ts' },
  'solid-query': { output: './src/jac/hooks/solid-query.ts' },
  'vue-query': { output: './src/jac/hooks/vue-query.ts' },
  'svelte-query': { output: './src/jac/hooks/svelte-query.ts' },
  'angular-query': { output: './src/jac/hooks/angular-query.ts' },
  docs: {
    output: './src/jac/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
