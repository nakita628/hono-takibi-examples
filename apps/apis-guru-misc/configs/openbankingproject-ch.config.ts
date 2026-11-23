import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openbankingproject.ch/1.3.8_2020-12-14 - Swiss edition 1.3.8.1-CH/openapi.yaml',
  output: './src/openbankingproject-ch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/openbankingproject-ch/types.ts' },
  client: { output: './src/openbankingproject-ch/client.ts', baseUrl: '/' },
  rpc: { output: './src/openbankingproject-ch/rpc.ts', parseResponse: true },
  swr: { output: './src/openbankingproject-ch/hooks/swr.ts' },
  'tanstack-query': { output: './src/openbankingproject-ch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openbankingproject-ch/hooks/preact-query.ts' },
  'solid-query': { output: './src/openbankingproject-ch/hooks/solid-query.ts' },
  'vue-query': { output: './src/openbankingproject-ch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openbankingproject-ch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openbankingproject-ch/hooks/angular-query.ts' },
  docs: {
    output: './src/openbankingproject-ch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
