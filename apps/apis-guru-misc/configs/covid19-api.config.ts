import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/covid19-api.com/1.2.6/openapi.yaml',
  output: './src/covid19-api/routes.ts',
  template: {},
  type: { output: './src/covid19-api/types.ts' },
  client: { output: './src/covid19-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/covid19-api/rpc.ts', parseResponse: true },
  swr: { output: './src/covid19-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/covid19-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/covid19-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/covid19-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/covid19-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/covid19-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/covid19-api/hooks/angular-query.ts' },
  docs: {
    output: './src/covid19-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
