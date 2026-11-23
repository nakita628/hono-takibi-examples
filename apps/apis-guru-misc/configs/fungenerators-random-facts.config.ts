import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/random-facts/1.5/openapi.yaml',
  output: './src/fungenerators-random-facts/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fungenerators-random-facts/types.ts' },
  client: { output: './src/fungenerators-random-facts/client.ts', baseUrl: '/' },
  rpc: { output: './src/fungenerators-random-facts/rpc.ts', parseResponse: true },
  swr: { output: './src/fungenerators-random-facts/hooks/swr.ts' },
  'tanstack-query': { output: './src/fungenerators-random-facts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fungenerators-random-facts/hooks/preact-query.ts' },
  'solid-query': { output: './src/fungenerators-random-facts/hooks/solid-query.ts' },
  'vue-query': { output: './src/fungenerators-random-facts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fungenerators-random-facts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fungenerators-random-facts/hooks/angular-query.ts' },
  docs: {
    output: './src/fungenerators-random-facts/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
