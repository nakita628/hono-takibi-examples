import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportmp/3.0.0/openapi.yaml',
  output: './src/transportmp/routes.ts',
  template: {},
  type: { output: './src/transportmp/types.ts' },
  client: { output: './src/transportmp/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportmp/rpc.ts', parseResponse: true },
  swr: { output: './src/transportmp/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportmp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportmp/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportmp/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportmp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportmp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportmp/hooks/angular-query.ts' },
  docs: {
    output: './src/transportmp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
