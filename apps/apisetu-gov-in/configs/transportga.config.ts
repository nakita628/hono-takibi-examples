import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportga/3.0.0/openapi.yaml',
  output: './src/transportga/routes.ts',
  template: {},
  type: { output: './src/transportga/types.ts' },
  client: { output: './src/transportga/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportga/rpc.ts', parseResponse: true },
  swr: { output: './src/transportga/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportga/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportga/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportga/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportga/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportga/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportga/hooks/angular-query.ts' },
  docs: {
    output: './src/transportga/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
