import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/route53resolver/2018-04-01/openapi.yaml',
  output: './src/route53resolver/routes.ts',
  template: {},
  type: { output: './src/route53resolver/types.ts' },
  client: { output: './src/route53resolver/client.ts', baseUrl: '/' },
  rpc: { output: './src/route53resolver/rpc.ts', parseResponse: true },
  swr: { output: './src/route53resolver/hooks/swr.ts' },
  'tanstack-query': { output: './src/route53resolver/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/route53resolver/hooks/preact-query.ts' },
  'solid-query': { output: './src/route53resolver/hooks/solid-query.ts' },
  'vue-query': { output: './src/route53resolver/hooks/vue-query.ts' },
  'svelte-query': { output: './src/route53resolver/hooks/svelte-query.ts' },
  'angular-query': { output: './src/route53resolver/hooks/angular-query.ts' },
  docs: {
    output: './src/route53resolver/api.md',
    curl: true,
    baseUrl: 'https://route53resolver.us-east-1.amazonaws.com',
  },
})
