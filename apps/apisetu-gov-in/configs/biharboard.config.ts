import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/biharboard/3.0.0/openapi.yaml',
  output: './src/biharboard/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/biharboard/types.ts' },
  client: { output: './src/biharboard/client.ts', baseUrl: '/' },
  rpc: { output: './src/biharboard/rpc.ts', parseResponse: true },
  swr: { output: './src/biharboard/hooks/swr.ts' },
  'tanstack-query': { output: './src/biharboard/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/biharboard/hooks/preact-query.ts' },
  'solid-query': { output: './src/biharboard/hooks/solid-query.ts' },
  'vue-query': { output: './src/biharboard/hooks/vue-query.ts' },
  'svelte-query': { output: './src/biharboard/hooks/svelte-query.ts' },
  'angular-query': { output: './src/biharboard/hooks/angular-query.ts' },
  docs: {
    output: './src/biharboard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
