import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/trashnothing.com/1.3/openapi.yaml',
  output: './src/trashnothing/routes.ts',
  template: {},
  type: { output: './src/trashnothing/types.ts' },
  client: { output: './src/trashnothing/client.ts', baseUrl: '/' },
  rpc: { output: './src/trashnothing/rpc.ts', parseResponse: true },
  swr: { output: './src/trashnothing/hooks/swr.ts' },
  'tanstack-query': { output: './src/trashnothing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/trashnothing/hooks/preact-query.ts' },
  'solid-query': { output: './src/trashnothing/hooks/solid-query.ts' },
  'vue-query': { output: './src/trashnothing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/trashnothing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/trashnothing/hooks/angular-query.ts' },
  docs: {
    output: './src/trashnothing/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
