import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/paypi.dev/1.0.0/openapi.yaml',
  output: './src/paypi-dev/routes.ts',
  template: {},
  type: { output: './src/paypi-dev/types.ts' },
  client: { output: './src/paypi-dev/client.ts', baseUrl: '/' },
  rpc: { output: './src/paypi-dev/rpc.ts', parseResponse: true },
  swr: { output: './src/paypi-dev/hooks/swr.ts' },
  'tanstack-query': { output: './src/paypi-dev/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/paypi-dev/hooks/preact-query.ts' },
  'solid-query': { output: './src/paypi-dev/hooks/solid-query.ts' },
  'vue-query': { output: './src/paypi-dev/hooks/vue-query.ts' },
  'svelte-query': { output: './src/paypi-dev/hooks/svelte-query.ts' },
  'angular-query': { output: './src/paypi-dev/hooks/angular-query.ts' },
  docs: {
    output: './src/paypi-dev/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
