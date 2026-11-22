import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/juspay/hyperswitch/main/api-reference/v1/openapi_spec_v1.json',
  output: './src/routes.ts',
  // template: { routeHandler: true }: the default template exports each handler file under its tag or first
  // path segment, and one here starts with a digit, which is not an identifier (nakita628/hono-takibi#506).
  template: { routeHandler: true },
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
    baseUrl: 'https://sandbox.hyperswitch.io',
  },
})
