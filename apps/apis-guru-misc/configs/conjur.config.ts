import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/conjur.local/5.3.0/openapi.yaml',
  output: './src/conjur/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/conjur/types.ts' },
  client: { output: './src/conjur/client.ts', baseUrl: '/' },
  rpc: { output: './src/conjur/rpc.ts', parseResponse: true },
  swr: { output: './src/conjur/hooks/swr.ts' },
  'tanstack-query': { output: './src/conjur/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/conjur/hooks/preact-query.ts' },
  'solid-query': { output: './src/conjur/hooks/solid-query.ts' },
  'vue-query': { output: './src/conjur/hooks/vue-query.ts' },
  'svelte-query': { output: './src/conjur/hooks/svelte-query.ts' },
  'angular-query': { output: './src/conjur/hooks/angular-query.ts' },
  docs: {
    output: './src/conjur/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
