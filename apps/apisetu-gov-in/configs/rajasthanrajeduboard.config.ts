import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/rajasthanrajeduboard/3.0.0/openapi.yaml',
  output: './src/rajasthanrajeduboard/routes.ts',
  template: {},
  type: { output: './src/rajasthanrajeduboard/types.ts' },
  client: { output: './src/rajasthanrajeduboard/client.ts', baseUrl: '/' },
  rpc: { output: './src/rajasthanrajeduboard/rpc.ts', parseResponse: true },
  swr: { output: './src/rajasthanrajeduboard/hooks/swr.ts' },
  'tanstack-query': { output: './src/rajasthanrajeduboard/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rajasthanrajeduboard/hooks/preact-query.ts' },
  'solid-query': { output: './src/rajasthanrajeduboard/hooks/solid-query.ts' },
  'vue-query': { output: './src/rajasthanrajeduboard/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rajasthanrajeduboard/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rajasthanrajeduboard/hooks/angular-query.ts' },
  docs: {
    output: './src/rajasthanrajeduboard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
