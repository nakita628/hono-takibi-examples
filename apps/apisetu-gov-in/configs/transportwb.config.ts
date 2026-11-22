import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportwb/3.0.0/openapi.yaml',
  output: './src/transportwb/routes.ts',
  template: {},
  type: { output: './src/transportwb/types.ts' },
  client: { output: './src/transportwb/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportwb/rpc.ts', parseResponse: true },
  swr: { output: './src/transportwb/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportwb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportwb/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportwb/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportwb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportwb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportwb/hooks/angular-query.ts' },
  docs: {
    output: './src/transportwb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
