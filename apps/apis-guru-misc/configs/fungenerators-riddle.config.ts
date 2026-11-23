import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/riddle/1.5/openapi.yaml',
  output: './src/fungenerators-riddle/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fungenerators-riddle/types.ts' },
  client: { output: './src/fungenerators-riddle/client.ts', baseUrl: '/' },
  rpc: { output: './src/fungenerators-riddle/rpc.ts', parseResponse: true },
  swr: { output: './src/fungenerators-riddle/hooks/swr.ts' },
  'tanstack-query': { output: './src/fungenerators-riddle/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fungenerators-riddle/hooks/preact-query.ts' },
  'solid-query': { output: './src/fungenerators-riddle/hooks/solid-query.ts' },
  'vue-query': { output: './src/fungenerators-riddle/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fungenerators-riddle/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fungenerators-riddle/hooks/angular-query.ts' },
  docs: {
    output: './src/fungenerators-riddle/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
