import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportsk/3.0.0/openapi.yaml',
  output: './src/transportsk/routes.ts',
  template: {},
  type: { output: './src/transportsk/types.ts' },
  client: { output: './src/transportsk/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportsk/rpc.ts', parseResponse: true },
  swr: { output: './src/transportsk/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportsk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportsk/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportsk/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportsk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportsk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportsk/hooks/angular-query.ts' },
  docs: {
    output: './src/transportsk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
