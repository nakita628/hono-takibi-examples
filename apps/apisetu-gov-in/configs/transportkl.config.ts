import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportkl/3.0.0/openapi.yaml',
  output: './src/transportkl/routes.ts',
  template: {},
  type: { output: './src/transportkl/types.ts' },
  client: { output: './src/transportkl/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportkl/rpc.ts', parseResponse: true },
  swr: { output: './src/transportkl/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportkl/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportkl/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportkl/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportkl/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportkl/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportkl/hooks/angular-query.ts' },
  docs: {
    output: './src/transportkl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
