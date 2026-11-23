import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/macie2/2020-01-01/openapi.yaml',
  output: './src/macie2/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/macie2/types.ts' },
  client: { output: './src/macie2/client.ts', baseUrl: '/' },
  rpc: { output: './src/macie2/rpc.ts', parseResponse: true },
  swr: { output: './src/macie2/hooks/swr.ts' },
  'tanstack-query': { output: './src/macie2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/macie2/hooks/preact-query.ts' },
  'solid-query': { output: './src/macie2/hooks/solid-query.ts' },
  'vue-query': { output: './src/macie2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/macie2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/macie2/hooks/angular-query.ts' },
  docs: {
    output: './src/macie2/api.md',
    curl: true,
    baseUrl: 'https://macie2.us-east-1.amazonaws.com',
  },
})
