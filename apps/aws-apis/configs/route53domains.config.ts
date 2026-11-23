import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/route53domains/2014-05-15/openapi.yaml',
  output: './src/route53domains/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/route53domains/types.ts' },
  client: { output: './src/route53domains/client.ts', baseUrl: '/' },
  rpc: { output: './src/route53domains/rpc.ts', parseResponse: true },
  swr: { output: './src/route53domains/hooks/swr.ts' },
  'tanstack-query': { output: './src/route53domains/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/route53domains/hooks/preact-query.ts' },
  'solid-query': { output: './src/route53domains/hooks/solid-query.ts' },
  'vue-query': { output: './src/route53domains/hooks/vue-query.ts' },
  'svelte-query': { output: './src/route53domains/hooks/svelte-query.ts' },
  'angular-query': { output: './src/route53domains/hooks/angular-query.ts' },
  docs: {
    output: './src/route53domains/api.md',
    curl: true,
    baseUrl: 'https://route53domains.us-east-1.amazonaws.com',
  },
})
