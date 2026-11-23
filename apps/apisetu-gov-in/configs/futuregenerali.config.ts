import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/futuregenerali/3.0.0/openapi.yaml',
  output: './src/futuregenerali/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/futuregenerali/types.ts' },
  client: { output: './src/futuregenerali/client.ts', baseUrl: '/' },
  rpc: { output: './src/futuregenerali/rpc.ts', parseResponse: true },
  swr: { output: './src/futuregenerali/hooks/swr.ts' },
  'tanstack-query': { output: './src/futuregenerali/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/futuregenerali/hooks/preact-query.ts' },
  'solid-query': { output: './src/futuregenerali/hooks/solid-query.ts' },
  'vue-query': { output: './src/futuregenerali/hooks/vue-query.ts' },
  'svelte-query': { output: './src/futuregenerali/hooks/svelte-query.ts' },
  'angular-query': { output: './src/futuregenerali/hooks/angular-query.ts' },
  docs: {
    output: './src/futuregenerali/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
