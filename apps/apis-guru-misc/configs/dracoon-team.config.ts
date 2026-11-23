import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/dracoon.team/4.42.2/openapi.yaml',
  output: './src/dracoon-team/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dracoon-team/types.ts' },
  client: { output: './src/dracoon-team/client.ts', baseUrl: '/' },
  rpc: { output: './src/dracoon-team/rpc.ts', parseResponse: true },
  swr: { output: './src/dracoon-team/hooks/swr.ts' },
  'tanstack-query': { output: './src/dracoon-team/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dracoon-team/hooks/preact-query.ts' },
  'solid-query': { output: './src/dracoon-team/hooks/solid-query.ts' },
  'vue-query': { output: './src/dracoon-team/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dracoon-team/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dracoon-team/hooks/angular-query.ts' },
  docs: {
    output: './src/dracoon-team/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
