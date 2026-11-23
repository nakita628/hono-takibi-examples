import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mizoramlesde/3.0.0/openapi.yaml',
  output: './src/mizoramlesde/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mizoramlesde/types.ts' },
  client: { output: './src/mizoramlesde/client.ts', baseUrl: '/' },
  rpc: { output: './src/mizoramlesde/rpc.ts', parseResponse: true },
  swr: { output: './src/mizoramlesde/hooks/swr.ts' },
  'tanstack-query': { output: './src/mizoramlesde/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mizoramlesde/hooks/preact-query.ts' },
  'solid-query': { output: './src/mizoramlesde/hooks/solid-query.ts' },
  'vue-query': { output: './src/mizoramlesde/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mizoramlesde/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mizoramlesde/hooks/angular-query.ts' },
  docs: {
    output: './src/mizoramlesde/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
