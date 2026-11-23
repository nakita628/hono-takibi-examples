import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wealthreader.com/1.0.0/openapi.yaml',
  output: './src/wealthreader/routes.ts',
  template: {},
  type: { output: './src/wealthreader/types.ts' },
  client: { output: './src/wealthreader/client.ts', baseUrl: '/' },
  rpc: { output: './src/wealthreader/rpc.ts', parseResponse: true },
  swr: { output: './src/wealthreader/hooks/swr.ts' },
  'tanstack-query': { output: './src/wealthreader/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wealthreader/hooks/preact-query.ts' },
  'solid-query': { output: './src/wealthreader/hooks/solid-query.ts' },
  'vue-query': { output: './src/wealthreader/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wealthreader/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wealthreader/hooks/angular-query.ts' },
  docs: {
    output: './src/wealthreader/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
