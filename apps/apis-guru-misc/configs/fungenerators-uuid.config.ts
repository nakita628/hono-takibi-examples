import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/uuid/1.5/openapi.yaml',
  output: './src/fungenerators-uuid/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fungenerators-uuid/types.ts' },
  client: { output: './src/fungenerators-uuid/client.ts', baseUrl: '/' },
  rpc: { output: './src/fungenerators-uuid/rpc.ts', parseResponse: true },
  swr: { output: './src/fungenerators-uuid/hooks/swr.ts' },
  'tanstack-query': { output: './src/fungenerators-uuid/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fungenerators-uuid/hooks/preact-query.ts' },
  'solid-query': { output: './src/fungenerators-uuid/hooks/solid-query.ts' },
  'vue-query': { output: './src/fungenerators-uuid/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fungenerators-uuid/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fungenerators-uuid/hooks/angular-query.ts' },
  docs: {
    output: './src/fungenerators-uuid/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
