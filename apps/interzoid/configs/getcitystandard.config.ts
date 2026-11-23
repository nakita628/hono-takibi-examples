import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcitystandard/1.0.0/openapi.yaml',
  output: './src/getcitystandard/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/getcitystandard/types.ts' },
  client: { output: './src/getcitystandard/client.ts', baseUrl: '/' },
  rpc: { output: './src/getcitystandard/rpc.ts', parseResponse: true },
  swr: { output: './src/getcitystandard/hooks/swr.ts' },
  'tanstack-query': { output: './src/getcitystandard/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getcitystandard/hooks/preact-query.ts' },
  'solid-query': { output: './src/getcitystandard/hooks/solid-query.ts' },
  'vue-query': { output: './src/getcitystandard/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getcitystandard/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getcitystandard/hooks/angular-query.ts' },
  docs: {
    output: './src/getcitystandard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
