import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Apify API, official OpenAPI spec:
  // https://github.com/apify/apify-docs/blob/f43cd6ca1a8ac561edf21ba125f894fd914f03b9/apify-api/openapi/openapi.yaml
  input:
    'https://raw.githubusercontent.com/apify/apify-docs/master/apify-api/openapi/openapi.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.apify.com',
  },
})
