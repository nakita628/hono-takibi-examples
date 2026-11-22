import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sso/2019-06-10/openapi.yaml',
  output: './src/sso/routes.ts',
  template: {},
  type: { output: './src/sso/types.ts' },
  client: { output: './src/sso/client.ts', baseUrl: '/' },
  rpc: { output: './src/sso/rpc.ts', parseResponse: true },
  swr: { output: './src/sso/hooks/swr.ts' },
  'tanstack-query': { output: './src/sso/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sso/hooks/preact-query.ts' },
  'solid-query': { output: './src/sso/hooks/solid-query.ts' },
  'vue-query': { output: './src/sso/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sso/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sso/hooks/angular-query.ts' },
  docs: {
    output: './src/sso/api.md',
    curl: true,
    baseUrl: 'https://sso.us-east-1.amazonaws.com',
  },
})
