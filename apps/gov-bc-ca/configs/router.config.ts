import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/router/2.0.0/openapi.yaml',
  output: './src/router/routes.ts',
  template: {},
  type: { output: './src/router/types.ts' },
  client: { output: './src/router/client.ts', baseUrl: '/' },
  rpc: { output: './src/router/rpc.ts', parseResponse: true },
  swr: { output: './src/router/hooks/swr.ts' },
  'tanstack-query': { output: './src/router/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/router/hooks/preact-query.ts' },
  'solid-query': { output: './src/router/hooks/solid-query.ts' },
  'vue-query': { output: './src/router/hooks/vue-query.ts' },
  'svelte-query': { output: './src/router/hooks/svelte-query.ts' },
  'angular-query': { output: './src/router/hooks/angular-query.ts' },
  docs: {
    output: './src/router/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
