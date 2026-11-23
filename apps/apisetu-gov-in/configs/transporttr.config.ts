import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transporttr/3.0.0/openapi.yaml',
  output: './src/transporttr/routes.ts',
  template: {},
  type: { output: './src/transporttr/types.ts' },
  client: { output: './src/transporttr/client.ts', baseUrl: '/' },
  rpc: { output: './src/transporttr/rpc.ts', parseResponse: true },
  swr: { output: './src/transporttr/hooks/swr.ts' },
  'tanstack-query': { output: './src/transporttr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transporttr/hooks/preact-query.ts' },
  'solid-query': { output: './src/transporttr/hooks/solid-query.ts' },
  'vue-query': { output: './src/transporttr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transporttr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transporttr/hooks/angular-query.ts' },
  docs: {
    output: './src/transporttr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
