import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openfigi.com/1.4.0/openapi.yaml',
  output: './src/openfigi/routes.ts',
  template: {},
  type: { output: './src/openfigi/types.ts' },
  client: { output: './src/openfigi/client.ts', baseUrl: '/' },
  rpc: { output: './src/openfigi/rpc.ts', parseResponse: true },
  swr: { output: './src/openfigi/hooks/swr.ts' },
  'tanstack-query': { output: './src/openfigi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openfigi/hooks/preact-query.ts' },
  'solid-query': { output: './src/openfigi/hooks/solid-query.ts' },
  'vue-query': { output: './src/openfigi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openfigi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openfigi/hooks/angular-query.ts' },
  docs: {
    output: './src/openfigi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
