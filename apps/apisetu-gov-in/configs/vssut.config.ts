import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/vssut/3.0.0/openapi.yaml',
  output: './src/vssut/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vssut/types.ts' },
  client: { output: './src/vssut/client.ts', baseUrl: '/' },
  rpc: { output: './src/vssut/rpc.ts', parseResponse: true },
  swr: { output: './src/vssut/hooks/swr.ts' },
  'tanstack-query': { output: './src/vssut/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vssut/hooks/preact-query.ts' },
  'solid-query': { output: './src/vssut/hooks/solid-query.ts' },
  'vue-query': { output: './src/vssut/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vssut/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vssut/hooks/angular-query.ts' },
  docs: {
    output: './src/vssut/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
