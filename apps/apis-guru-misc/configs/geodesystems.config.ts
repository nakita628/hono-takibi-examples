import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/geodesystems.com/1.0.0/openapi.yaml',
  output: './src/geodesystems/routes.ts',
  template: {},
  type: { output: './src/geodesystems/types.ts' },
  client: { output: './src/geodesystems/client.ts', baseUrl: '/' },
  rpc: { output: './src/geodesystems/rpc.ts', parseResponse: true },
  swr: { output: './src/geodesystems/hooks/swr.ts' },
  'tanstack-query': { output: './src/geodesystems/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/geodesystems/hooks/preact-query.ts' },
  'solid-query': { output: './src/geodesystems/hooks/solid-query.ts' },
  'vue-query': { output: './src/geodesystems/hooks/vue-query.ts' },
  'svelte-query': { output: './src/geodesystems/hooks/svelte-query.ts' },
  'angular-query': { output: './src/geodesystems/hooks/angular-query.ts' },
  docs: {
    output: './src/geodesystems/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
