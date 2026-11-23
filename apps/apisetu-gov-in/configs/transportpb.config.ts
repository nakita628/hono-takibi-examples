import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportpb/3.0.0/openapi.yaml',
  output: './src/transportpb/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transportpb/types.ts' },
  client: { output: './src/transportpb/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportpb/rpc.ts', parseResponse: true },
  swr: { output: './src/transportpb/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportpb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportpb/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportpb/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportpb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportpb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportpb/hooks/angular-query.ts' },
  docs: {
    output: './src/transportpb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
