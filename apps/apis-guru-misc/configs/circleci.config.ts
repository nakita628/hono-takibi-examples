import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/circleci.com/v1/openapi.yaml',
  output: './src/circleci/routes.ts',
  template: {},
  type: { output: './src/circleci/types.ts' },
  client: { output: './src/circleci/client.ts', baseUrl: '/' },
  rpc: { output: './src/circleci/rpc.ts', parseResponse: true },
  swr: { output: './src/circleci/hooks/swr.ts' },
  'tanstack-query': { output: './src/circleci/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/circleci/hooks/preact-query.ts' },
  'solid-query': { output: './src/circleci/hooks/solid-query.ts' },
  'vue-query': { output: './src/circleci/hooks/vue-query.ts' },
  'svelte-query': { output: './src/circleci/hooks/svelte-query.ts' },
  'angular-query': { output: './src/circleci/hooks/angular-query.ts' },
  docs: {
    output: './src/circleci/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
