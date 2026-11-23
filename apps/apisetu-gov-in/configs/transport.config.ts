import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transport/3.0.0/openapi.yaml',
  output: './src/transport/routes.ts',
  template: {},
  type: { output: './src/transport/types.ts' },
  client: { output: './src/transport/client.ts', baseUrl: '/' },
  rpc: { output: './src/transport/rpc.ts', parseResponse: true },
  swr: { output: './src/transport/hooks/swr.ts' },
  'tanstack-query': { output: './src/transport/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transport/hooks/preact-query.ts' },
  'solid-query': { output: './src/transport/hooks/solid-query.ts' },
  'vue-query': { output: './src/transport/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transport/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transport/hooks/angular-query.ts' },
  docs: {
    output: './src/transport/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
