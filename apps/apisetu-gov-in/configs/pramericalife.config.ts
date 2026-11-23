import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pramericalife/3.0.0/openapi.yaml',
  output: './src/pramericalife/routes.ts',
  template: {},
  type: { output: './src/pramericalife/types.ts' },
  client: { output: './src/pramericalife/client.ts', baseUrl: '/' },
  rpc: { output: './src/pramericalife/rpc.ts', parseResponse: true },
  swr: { output: './src/pramericalife/hooks/swr.ts' },
  'tanstack-query': { output: './src/pramericalife/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pramericalife/hooks/preact-query.ts' },
  'solid-query': { output: './src/pramericalife/hooks/solid-query.ts' },
  'vue-query': { output: './src/pramericalife/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pramericalife/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pramericalife/hooks/angular-query.ts' },
  docs: {
    output: './src/pramericalife/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
