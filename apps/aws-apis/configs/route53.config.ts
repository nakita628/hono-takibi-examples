import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/route53/2013-04-01/openapi.yaml',
  output: './src/route53/routes.ts',
  // template: { routeHandler: true }: the default template exports each handler file under its tag or first
  // path segment, and one here starts with a digit, which is not an identifier (nakita628/hono-takibi#506).
  template: { routeHandler: true },
  type: { output: './src/route53/types.ts' },
  client: { output: './src/route53/client.ts', baseUrl: '/' },
  rpc: { output: './src/route53/rpc.ts', parseResponse: true },
  swr: { output: './src/route53/hooks/swr.ts' },
  'tanstack-query': { output: './src/route53/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/route53/hooks/preact-query.ts' },
  'solid-query': { output: './src/route53/hooks/solid-query.ts' },
  'vue-query': { output: './src/route53/hooks/vue-query.ts' },
  'svelte-query': { output: './src/route53/hooks/svelte-query.ts' },
  'angular-query': { output: './src/route53/hooks/angular-query.ts' },
  docs: {
    output: './src/route53/api.md',
    curl: true,
    baseUrl: 'https://route53.us-east-1.amazonaws.com',
  },
})
