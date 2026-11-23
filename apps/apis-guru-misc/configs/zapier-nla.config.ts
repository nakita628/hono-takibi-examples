import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zapier.com/nla/1.0.0/openapi.yaml',
  output: './src/zapier-nla/routes.ts',
  template: {},
  type: { output: './src/zapier-nla/types.ts' },
  client: { output: './src/zapier-nla/client.ts', baseUrl: '/' },
  rpc: { output: './src/zapier-nla/rpc.ts', parseResponse: true },
  swr: { output: './src/zapier-nla/hooks/swr.ts' },
  'tanstack-query': { output: './src/zapier-nla/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/zapier-nla/hooks/preact-query.ts' },
  'solid-query': { output: './src/zapier-nla/hooks/solid-query.ts' },
  'vue-query': { output: './src/zapier-nla/hooks/vue-query.ts' },
  'svelte-query': { output: './src/zapier-nla/hooks/svelte-query.ts' },
  'angular-query': { output: './src/zapier-nla/hooks/angular-query.ts' },
  docs: {
    output: './src/zapier-nla/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
