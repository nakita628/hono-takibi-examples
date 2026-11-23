import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportrj/3.0.0/openapi.yaml',
  output: './src/transportrj/routes.ts',
  template: {},
  type: { output: './src/transportrj/types.ts' },
  client: { output: './src/transportrj/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportrj/rpc.ts', parseResponse: true },
  swr: { output: './src/transportrj/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportrj/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportrj/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportrj/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportrj/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportrj/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportrj/hooks/angular-query.ts' },
  docs: {
    output: './src/transportrj/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
