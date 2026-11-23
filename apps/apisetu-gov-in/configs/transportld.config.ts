import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportld/3.0.0/openapi.yaml',
  output: './src/transportld/routes.ts',
  template: {},
  type: { output: './src/transportld/types.ts' },
  client: { output: './src/transportld/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportld/rpc.ts', parseResponse: true },
  swr: { output: './src/transportld/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportld/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportld/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportld/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportld/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportld/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportld/hooks/angular-query.ts' },
  docs: {
    output: './src/transportld/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
