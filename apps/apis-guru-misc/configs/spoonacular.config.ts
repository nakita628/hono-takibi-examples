import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/spoonacular.com/1.1/openapi.yaml',
  output: './src/spoonacular/routes.ts',
  template: {},
  type: { output: './src/spoonacular/types.ts' },
  client: { output: './src/spoonacular/client.ts', baseUrl: '/' },
  rpc: { output: './src/spoonacular/rpc.ts', parseResponse: true },
  swr: { output: './src/spoonacular/hooks/swr.ts' },
  'tanstack-query': { output: './src/spoonacular/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/spoonacular/hooks/preact-query.ts' },
  'solid-query': { output: './src/spoonacular/hooks/solid-query.ts' },
  'vue-query': { output: './src/spoonacular/hooks/vue-query.ts' },
  'svelte-query': { output: './src/spoonacular/hooks/svelte-query.ts' },
  'angular-query': { output: './src/spoonacular/hooks/angular-query.ts' },
  docs: {
    output: './src/spoonacular/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
