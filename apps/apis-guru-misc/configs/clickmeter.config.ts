import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clickmeter.com/v2/openapi.yaml',
  output: './src/clickmeter/routes.ts',
  template: {},
  type: { output: './src/clickmeter/types.ts' },
  client: { output: './src/clickmeter/client.ts', baseUrl: '/' },
  rpc: { output: './src/clickmeter/rpc.ts', parseResponse: true },
  swr: { output: './src/clickmeter/hooks/swr.ts' },
  'tanstack-query': { output: './src/clickmeter/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clickmeter/hooks/preact-query.ts' },
  'solid-query': { output: './src/clickmeter/hooks/solid-query.ts' },
  'vue-query': { output: './src/clickmeter/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clickmeter/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clickmeter/hooks/angular-query.ts' },
  docs: {
    output: './src/clickmeter/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
