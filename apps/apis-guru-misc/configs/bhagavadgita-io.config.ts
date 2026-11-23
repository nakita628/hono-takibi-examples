import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bhagavadgita.io/1.0/openapi.yaml',
  output: './src/bhagavadgita-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bhagavadgita-io/types.ts' },
  client: { output: './src/bhagavadgita-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/bhagavadgita-io/rpc.ts', parseResponse: true },
  swr: { output: './src/bhagavadgita-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/bhagavadgita-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bhagavadgita-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/bhagavadgita-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/bhagavadgita-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bhagavadgita-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bhagavadgita-io/hooks/angular-query.ts' },
  docs: {
    output: './src/bhagavadgita-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
