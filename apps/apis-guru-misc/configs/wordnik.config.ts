import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wordnik.com/4.0/openapi.yaml',
  output: './src/wordnik/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/wordnik/types.ts' },
  client: { output: './src/wordnik/client.ts', baseUrl: '/' },
  rpc: { output: './src/wordnik/rpc.ts', parseResponse: true },
  swr: { output: './src/wordnik/hooks/swr.ts' },
  'tanstack-query': { output: './src/wordnik/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wordnik/hooks/preact-query.ts' },
  'solid-query': { output: './src/wordnik/hooks/solid-query.ts' },
  'vue-query': { output: './src/wordnik/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wordnik/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wordnik/hooks/angular-query.ts' },
  docs: {
    output: './src/wordnik/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
