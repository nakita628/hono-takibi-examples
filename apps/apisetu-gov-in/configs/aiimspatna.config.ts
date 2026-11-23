import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aiimspatna/3.0.0/openapi.yaml',
  output: './src/aiimspatna/routes.ts',
  template: {},
  type: { output: './src/aiimspatna/types.ts' },
  client: { output: './src/aiimspatna/client.ts', baseUrl: '/' },
  rpc: { output: './src/aiimspatna/rpc.ts', parseResponse: true },
  swr: { output: './src/aiimspatna/hooks/swr.ts' },
  'tanstack-query': { output: './src/aiimspatna/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/aiimspatna/hooks/preact-query.ts' },
  'solid-query': { output: './src/aiimspatna/hooks/solid-query.ts' },
  'vue-query': { output: './src/aiimspatna/hooks/vue-query.ts' },
  'svelte-query': { output: './src/aiimspatna/hooks/svelte-query.ts' },
  'angular-query': { output: './src/aiimspatna/hooks/angular-query.ts' },
  docs: {
    output: './src/aiimspatna/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
