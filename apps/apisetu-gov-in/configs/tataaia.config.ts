import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/tataaia/3.0.0/openapi.yaml',
  output: './src/tataaia/routes.ts',
  template: {},
  type: { output: './src/tataaia/types.ts' },
  client: { output: './src/tataaia/client.ts', baseUrl: '/' },
  rpc: { output: './src/tataaia/rpc.ts', parseResponse: true },
  swr: { output: './src/tataaia/hooks/swr.ts' },
  'tanstack-query': { output: './src/tataaia/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tataaia/hooks/preact-query.ts' },
  'solid-query': { output: './src/tataaia/hooks/solid-query.ts' },
  'vue-query': { output: './src/tataaia/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tataaia/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tataaia/hooks/angular-query.ts' },
  docs: {
    output: './src/tataaia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
