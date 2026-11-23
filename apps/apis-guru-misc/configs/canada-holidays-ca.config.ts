import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/canada-holidays.ca/1.8.0/openapi.yaml',
  output: './src/canada-holidays-ca/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/canada-holidays-ca/types.ts' },
  client: { output: './src/canada-holidays-ca/client.ts', baseUrl: '/' },
  rpc: { output: './src/canada-holidays-ca/rpc.ts', parseResponse: true },
  swr: { output: './src/canada-holidays-ca/hooks/swr.ts' },
  'tanstack-query': { output: './src/canada-holidays-ca/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/canada-holidays-ca/hooks/preact-query.ts' },
  'solid-query': { output: './src/canada-holidays-ca/hooks/solid-query.ts' },
  'vue-query': { output: './src/canada-holidays-ca/hooks/vue-query.ts' },
  'svelte-query': { output: './src/canada-holidays-ca/hooks/svelte-query.ts' },
  'angular-query': { output: './src/canada-holidays-ca/hooks/angular-query.ts' },
  docs: {
    output: './src/canada-holidays-ca/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
