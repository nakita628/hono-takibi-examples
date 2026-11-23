import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/sbigeneral/3.0.0/openapi.yaml',
  output: './src/sbigeneral/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sbigeneral/types.ts' },
  client: { output: './src/sbigeneral/client.ts', baseUrl: '/' },
  rpc: { output: './src/sbigeneral/rpc.ts', parseResponse: true },
  swr: { output: './src/sbigeneral/hooks/swr.ts' },
  'tanstack-query': { output: './src/sbigeneral/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sbigeneral/hooks/preact-query.ts' },
  'solid-query': { output: './src/sbigeneral/hooks/solid-query.ts' },
  'vue-query': { output: './src/sbigeneral/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sbigeneral/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sbigeneral/hooks/angular-query.ts' },
  docs: {
    output: './src/sbigeneral/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
