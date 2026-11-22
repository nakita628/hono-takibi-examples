import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ideal-postcodes.co.uk/3.7.0/openapi.yaml',
  output: './src/ideal-postcodes-co-uk/routes.ts',
  template: {},
  type: { output: './src/ideal-postcodes-co-uk/types.ts' },
  client: { output: './src/ideal-postcodes-co-uk/client.ts', baseUrl: '/' },
  rpc: { output: './src/ideal-postcodes-co-uk/rpc.ts', parseResponse: true },
  swr: { output: './src/ideal-postcodes-co-uk/hooks/swr.ts' },
  'tanstack-query': { output: './src/ideal-postcodes-co-uk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ideal-postcodes-co-uk/hooks/preact-query.ts' },
  'solid-query': { output: './src/ideal-postcodes-co-uk/hooks/solid-query.ts' },
  'vue-query': { output: './src/ideal-postcodes-co-uk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ideal-postcodes-co-uk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ideal-postcodes-co-uk/hooks/angular-query.ts' },
  docs: {
    output: './src/ideal-postcodes-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
