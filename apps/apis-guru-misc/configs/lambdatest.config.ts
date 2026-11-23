import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/lambdatest.com/1.0.1/openapi.yaml',
  output: './src/lambdatest/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/lambdatest/types.ts' },
  client: { output: './src/lambdatest/client.ts', baseUrl: '/' },
  rpc: { output: './src/lambdatest/rpc.ts', parseResponse: true },
  swr: { output: './src/lambdatest/hooks/swr.ts' },
  'tanstack-query': { output: './src/lambdatest/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lambdatest/hooks/preact-query.ts' },
  'solid-query': { output: './src/lambdatest/hooks/solid-query.ts' },
  'vue-query': { output: './src/lambdatest/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lambdatest/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lambdatest/hooks/angular-query.ts' },
  docs: {
    output: './src/lambdatest/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
