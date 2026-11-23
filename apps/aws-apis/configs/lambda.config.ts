import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/lambda/2015-03-31/openapi.yaml',
  output: './src/lambda/routes.ts',
  // template: { routeHandler: true }: the default template exports each handler file under its first path
  // segment, and one here starts with a digit, which is not an identifier (nakita628/hono-takibi#506).
  template: { routeHandler: true },
  type: { output: './src/lambda/types.ts' },
  client: { output: './src/lambda/client.ts', baseUrl: '/' },
  rpc: { output: './src/lambda/rpc.ts', parseResponse: true },
  swr: { output: './src/lambda/hooks/swr.ts' },
  'tanstack-query': { output: './src/lambda/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lambda/hooks/preact-query.ts' },
  'solid-query': { output: './src/lambda/hooks/solid-query.ts' },
  'vue-query': { output: './src/lambda/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lambda/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lambda/hooks/angular-query.ts' },
  docs: {
    output: './src/lambda/api.md',
    curl: true,
    baseUrl: 'https://lambda.us-east-1.amazonaws.com',
  },
})
