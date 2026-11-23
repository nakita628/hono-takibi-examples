import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/asrb/3.0.0/openapi.yaml',
  output: './src/asrb/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/asrb/types.ts' },
  client: { output: './src/asrb/client.ts', baseUrl: '/' },
  rpc: { output: './src/asrb/rpc.ts', parseResponse: true },
  swr: { output: './src/asrb/hooks/swr.ts' },
  'tanstack-query': { output: './src/asrb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/asrb/hooks/preact-query.ts' },
  'solid-query': { output: './src/asrb/hooks/solid-query.ts' },
  'vue-query': { output: './src/asrb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/asrb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/asrb/hooks/angular-query.ts' },
  docs: {
    output: './src/asrb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
