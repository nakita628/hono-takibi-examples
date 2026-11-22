import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pgimer/3.0.0/openapi.yaml',
  output: './src/pgimer/routes.ts',
  template: {},
  type: { output: './src/pgimer/types.ts' },
  client: { output: './src/pgimer/client.ts', baseUrl: '/' },
  rpc: { output: './src/pgimer/rpc.ts', parseResponse: true },
  swr: { output: './src/pgimer/hooks/swr.ts' },
  'tanstack-query': { output: './src/pgimer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pgimer/hooks/preact-query.ts' },
  'solid-query': { output: './src/pgimer/hooks/solid-query.ts' },
  'vue-query': { output: './src/pgimer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pgimer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pgimer/hooks/angular-query.ts' },
  docs: {
    output: './src/pgimer/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
