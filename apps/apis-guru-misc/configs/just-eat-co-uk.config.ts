import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/just-eat.co.uk/1.0.0/openapi.yaml',
  output: './src/just-eat-co-uk/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/just-eat-co-uk/types.ts' },
  client: { output: './src/just-eat-co-uk/client.ts', baseUrl: '/' },
  rpc: { output: './src/just-eat-co-uk/rpc.ts', parseResponse: true },
  swr: { output: './src/just-eat-co-uk/hooks/swr.ts' },
  'tanstack-query': { output: './src/just-eat-co-uk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/just-eat-co-uk/hooks/preact-query.ts' },
  'solid-query': { output: './src/just-eat-co-uk/hooks/solid-query.ts' },
  'vue-query': { output: './src/just-eat-co-uk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/just-eat-co-uk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/just-eat-co-uk/hooks/angular-query.ts' },
  docs: {
    output: './src/just-eat-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
