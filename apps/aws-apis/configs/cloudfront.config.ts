import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/cloudfront/2020-05-31/openapi.yaml',
  output: './src/cloudfront/routes.ts',
  // template: { routeHandler: true }: the default template exports each handler file under its tag or first
  // path segment, and one here starts with a digit, which is not an identifier (nakita628/hono-takibi#506).
  template: { routeHandler: true },
  type: { output: './src/cloudfront/types.ts' },
  client: { output: './src/cloudfront/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudfront/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudfront/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudfront/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudfront/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudfront/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudfront/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudfront/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudfront/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudfront/api.md',
    curl: true,
    baseUrl: 'https://cloudfront.us-east-1.amazonaws.com',
  },
})
