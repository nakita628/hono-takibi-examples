import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zeno.fm/0.6-99cfdac/openapi.yaml',
  output: './src/zeno-fm/routes.ts',
  template: {},
  type: { output: './src/zeno-fm/types.ts' },
  client: { output: './src/zeno-fm/client.ts', baseUrl: '/' },
  rpc: { output: './src/zeno-fm/rpc.ts', parseResponse: true },
  swr: { output: './src/zeno-fm/hooks/swr.ts' },
  'tanstack-query': { output: './src/zeno-fm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/zeno-fm/hooks/preact-query.ts' },
  'solid-query': { output: './src/zeno-fm/hooks/solid-query.ts' },
  'vue-query': { output: './src/zeno-fm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/zeno-fm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/zeno-fm/hooks/angular-query.ts' },
  docs: {
    output: './src/zeno-fm/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
