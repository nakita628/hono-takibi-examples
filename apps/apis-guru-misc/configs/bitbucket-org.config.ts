import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bitbucket.org/2.0/openapi.yaml',
  output: './src/bitbucket-org/routes.ts',
  template: {},
  type: { output: './src/bitbucket-org/types.ts' },
  client: { output: './src/bitbucket-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/bitbucket-org/rpc.ts', parseResponse: true },
  swr: { output: './src/bitbucket-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/bitbucket-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bitbucket-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/bitbucket-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/bitbucket-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bitbucket-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bitbucket-org/hooks/angular-query.ts' },
  docs: {
    output: './src/bitbucket-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
