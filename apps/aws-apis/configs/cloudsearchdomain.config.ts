import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudsearchdomain/2013-01-01/openapi.yaml',
  output: './src/cloudsearchdomain/routes.ts',
  // template: { routeHandler: true }: the default template exports each handler file under its first path
  // segment, and one here starts with a digit, which is not an identifier (nakita628/hono-takibi#506).
  template: { routeHandler: true },
  type: { output: './src/cloudsearchdomain/types.ts' },
  client: { output: './src/cloudsearchdomain/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudsearchdomain/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudsearchdomain/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudsearchdomain/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudsearchdomain/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudsearchdomain/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudsearchdomain/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudsearchdomain/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudsearchdomain/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudsearchdomain/api.md',
    curl: true,
    baseUrl: 'https://cloudsearchdomain.us-east-1.amazonaws.com',
  },
})
