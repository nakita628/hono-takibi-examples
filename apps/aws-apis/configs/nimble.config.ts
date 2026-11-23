import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/nimble/2020-08-01/openapi.yaml',
  output: './src/nimble/routes.ts',
  // template: { routeHandler: true }: the default template exports each handler file under its first path
  // segment, and one here starts with a digit, which is not an identifier (nakita628/hono-takibi#506).
  template: { routeHandler: true },
  type: { output: './src/nimble/types.ts' },
  client: { output: './src/nimble/client.ts', baseUrl: '/' },
  rpc: { output: './src/nimble/rpc.ts', parseResponse: true },
  swr: { output: './src/nimble/hooks/swr.ts' },
  'tanstack-query': { output: './src/nimble/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nimble/hooks/preact-query.ts' },
  'solid-query': { output: './src/nimble/hooks/solid-query.ts' },
  'vue-query': { output: './src/nimble/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nimble/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nimble/hooks/angular-query.ts' },
  docs: {
    output: './src/nimble/api.md',
    curl: true,
    baseUrl: 'https://nimble.us-east-1.amazonaws.com',
  },
})
