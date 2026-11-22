import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportup/3.0.0/openapi.yaml',
  output: './src/transportup/routes.ts',
  template: {},
  type: { output: './src/transportup/types.ts' },
  client: { output: './src/transportup/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportup/rpc.ts', parseResponse: true },
  swr: { output: './src/transportup/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportup/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportup/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportup/hooks/angular-query.ts' },
  docs: {
    output: './src/transportup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
