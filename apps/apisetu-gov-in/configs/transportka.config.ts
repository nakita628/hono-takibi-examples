import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportka/3.0.0/openapi.yaml',
  output: './src/transportka/routes.ts',
  template: {},
  type: { output: './src/transportka/types.ts' },
  client: { output: './src/transportka/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportka/rpc.ts', parseResponse: true },
  swr: { output: './src/transportka/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportka/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportka/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportka/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportka/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportka/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportka/hooks/angular-query.ts' },
  docs: {
    output: './src/transportka/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
