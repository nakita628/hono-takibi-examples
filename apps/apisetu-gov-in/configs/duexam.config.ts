import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/duexam/3.0.0/openapi.yaml',
  output: './src/duexam/routes.ts',
  template: {},
  type: { output: './src/duexam/types.ts' },
  client: { output: './src/duexam/client.ts', baseUrl: '/' },
  rpc: { output: './src/duexam/rpc.ts', parseResponse: true },
  swr: { output: './src/duexam/hooks/swr.ts' },
  'tanstack-query': { output: './src/duexam/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/duexam/hooks/preact-query.ts' },
  'solid-query': { output: './src/duexam/hooks/solid-query.ts' },
  'vue-query': { output: './src/duexam/hooks/vue-query.ts' },
  'svelte-query': { output: './src/duexam/hooks/svelte-query.ts' },
  'angular-query': { output: './src/duexam/hooks/angular-query.ts' },
  docs: {
    output: './src/duexam/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
