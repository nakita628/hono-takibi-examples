import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mbse/3.0.0/openapi.yaml',
  output: './src/mbse/routes.ts',
  template: {},
  type: { output: './src/mbse/types.ts' },
  client: { output: './src/mbse/client.ts', baseUrl: '/' },
  rpc: { output: './src/mbse/rpc.ts', parseResponse: true },
  swr: { output: './src/mbse/hooks/swr.ts' },
  'tanstack-query': { output: './src/mbse/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mbse/hooks/preact-query.ts' },
  'solid-query': { output: './src/mbse/hooks/solid-query.ts' },
  'vue-query': { output: './src/mbse/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mbse/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mbse/hooks/angular-query.ts' },
  docs: {
    output: './src/mbse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
