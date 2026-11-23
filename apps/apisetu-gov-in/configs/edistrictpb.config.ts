import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictpb/3.0.0/openapi.yaml',
  output: './src/edistrictpb/routes.ts',
  template: {},
  type: { output: './src/edistrictpb/types.ts' },
  client: { output: './src/edistrictpb/client.ts', baseUrl: '/' },
  rpc: { output: './src/edistrictpb/rpc.ts', parseResponse: true },
  swr: { output: './src/edistrictpb/hooks/swr.ts' },
  'tanstack-query': { output: './src/edistrictpb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/edistrictpb/hooks/preact-query.ts' },
  'solid-query': { output: './src/edistrictpb/hooks/solid-query.ts' },
  'vue-query': { output: './src/edistrictpb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/edistrictpb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/edistrictpb/hooks/angular-query.ts' },
  docs: {
    output: './src/edistrictpb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
