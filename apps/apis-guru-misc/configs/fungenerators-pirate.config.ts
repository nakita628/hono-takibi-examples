import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/pirate/1.5/openapi.yaml',
  output: './src/fungenerators-pirate/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fungenerators-pirate/types.ts' },
  client: { output: './src/fungenerators-pirate/client.ts', baseUrl: '/' },
  rpc: { output: './src/fungenerators-pirate/rpc.ts', parseResponse: true },
  swr: { output: './src/fungenerators-pirate/hooks/swr.ts' },
  'tanstack-query': { output: './src/fungenerators-pirate/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fungenerators-pirate/hooks/preact-query.ts' },
  'solid-query': { output: './src/fungenerators-pirate/hooks/solid-query.ts' },
  'vue-query': { output: './src/fungenerators-pirate/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fungenerators-pirate/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fungenerators-pirate/hooks/angular-query.ts' },
  docs: {
    output: './src/fungenerators-pirate/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
