import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hpbose/3.0.0/openapi.yaml',
  output: './src/hpbose/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hpbose/types.ts' },
  client: { output: './src/hpbose/client.ts', baseUrl: '/' },
  rpc: { output: './src/hpbose/rpc.ts', parseResponse: true },
  swr: { output: './src/hpbose/hooks/swr.ts' },
  'tanstack-query': { output: './src/hpbose/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hpbose/hooks/preact-query.ts' },
  'solid-query': { output: './src/hpbose/hooks/solid-query.ts' },
  'vue-query': { output: './src/hpbose/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hpbose/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hpbose/hooks/angular-query.ts' },
  docs: {
    output: './src/hpbose/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
