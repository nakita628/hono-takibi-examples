import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ditch/3.0.0/openapi.yaml',
  output: './src/ditch/routes.ts',
  template: {},
  type: { output: './src/ditch/types.ts' },
  client: { output: './src/ditch/client.ts', baseUrl: '/' },
  rpc: { output: './src/ditch/rpc.ts', parseResponse: true },
  swr: { output: './src/ditch/hooks/swr.ts' },
  'tanstack-query': { output: './src/ditch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ditch/hooks/preact-query.ts' },
  'solid-query': { output: './src/ditch/hooks/solid-query.ts' },
  'vue-query': { output: './src/ditch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ditch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ditch/hooks/angular-query.ts' },
  docs: {
    output: './src/ditch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
