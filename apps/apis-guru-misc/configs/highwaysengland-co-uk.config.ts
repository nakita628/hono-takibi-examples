import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/highwaysengland.co.uk/v1/openapi.yaml',
  output: './src/highwaysengland-co-uk/routes.ts',
  template: {},
  type: { output: './src/highwaysengland-co-uk/types.ts' },
  client: { output: './src/highwaysengland-co-uk/client.ts', baseUrl: '/' },
  rpc: { output: './src/highwaysengland-co-uk/rpc.ts', parseResponse: true },
  swr: { output: './src/highwaysengland-co-uk/hooks/swr.ts' },
  'tanstack-query': { output: './src/highwaysengland-co-uk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/highwaysengland-co-uk/hooks/preact-query.ts' },
  'solid-query': { output: './src/highwaysengland-co-uk/hooks/solid-query.ts' },
  'vue-query': { output: './src/highwaysengland-co-uk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/highwaysengland-co-uk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/highwaysengland-co-uk/hooks/angular-query.ts' },
  docs: {
    output: './src/highwaysengland-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
