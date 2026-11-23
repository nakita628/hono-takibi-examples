import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/quickchart.io/1.0.0/openapi.yaml',
  output: './src/quickchart-io/routes.ts',
  template: {},
  type: { output: './src/quickchart-io/types.ts' },
  client: { output: './src/quickchart-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/quickchart-io/rpc.ts', parseResponse: true },
  swr: { output: './src/quickchart-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/quickchart-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/quickchart-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/quickchart-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/quickchart-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/quickchart-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/quickchart-io/hooks/angular-query.ts' },
  docs: {
    output: './src/quickchart-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
