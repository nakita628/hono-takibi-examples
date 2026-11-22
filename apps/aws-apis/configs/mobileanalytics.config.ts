import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mobileanalytics/2014-06-05/openapi.yaml',
  output: './src/mobileanalytics/routes.ts',
  // template: { routeHandler: true }: the default template exports each handler file under its tag or first
  // path segment, and one here starts with a digit, which is not an identifier (nakita628/hono-takibi#506).
  template: { routeHandler: true },
  type: { output: './src/mobileanalytics/types.ts' },
  client: { output: './src/mobileanalytics/client.ts', baseUrl: '/' },
  rpc: { output: './src/mobileanalytics/rpc.ts', parseResponse: true },
  swr: { output: './src/mobileanalytics/hooks/swr.ts' },
  'tanstack-query': { output: './src/mobileanalytics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mobileanalytics/hooks/preact-query.ts' },
  'solid-query': { output: './src/mobileanalytics/hooks/solid-query.ts' },
  'vue-query': { output: './src/mobileanalytics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mobileanalytics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mobileanalytics/hooks/angular-query.ts' },
  docs: {
    output: './src/mobileanalytics/api.md',
    curl: true,
    baseUrl: 'https://mobileanalytics.us-east-1.amazonaws.com',
  },
})
