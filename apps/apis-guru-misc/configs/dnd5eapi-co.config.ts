import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/dnd5eapi.co/0.1/openapi.yaml',
  output: './src/dnd5eapi-co/routes.ts',
  template: {},
  type: { output: './src/dnd5eapi-co/types.ts' },
  client: { output: './src/dnd5eapi-co/client.ts', baseUrl: '/' },
  rpc: { output: './src/dnd5eapi-co/rpc.ts', parseResponse: true },
  swr: { output: './src/dnd5eapi-co/hooks/swr.ts' },
  'tanstack-query': { output: './src/dnd5eapi-co/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dnd5eapi-co/hooks/preact-query.ts' },
  'solid-query': { output: './src/dnd5eapi-co/hooks/solid-query.ts' },
  'vue-query': { output: './src/dnd5eapi-co/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dnd5eapi-co/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dnd5eapi-co/hooks/angular-query.ts' },
  docs: {
    output: './src/dnd5eapi-co/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
