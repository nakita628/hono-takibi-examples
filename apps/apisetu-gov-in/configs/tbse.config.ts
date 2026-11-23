import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/tbse/3.0.0/openapi.yaml',
  output: './src/tbse/routes.ts',
  template: {},
  type: { output: './src/tbse/types.ts' },
  client: { output: './src/tbse/client.ts', baseUrl: '/' },
  rpc: { output: './src/tbse/rpc.ts', parseResponse: true },
  swr: { output: './src/tbse/hooks/swr.ts' },
  'tanstack-query': { output: './src/tbse/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tbse/hooks/preact-query.ts' },
  'solid-query': { output: './src/tbse/hooks/solid-query.ts' },
  'vue-query': { output: './src/tbse/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tbse/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tbse/hooks/angular-query.ts' },
  docs: {
    output: './src/tbse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
