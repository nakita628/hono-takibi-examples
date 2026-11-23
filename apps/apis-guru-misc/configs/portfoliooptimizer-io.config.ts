import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/portfoliooptimizer.io/1.0.9/openapi.yaml',
  output: './src/portfoliooptimizer-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/portfoliooptimizer-io/types.ts' },
  client: { output: './src/portfoliooptimizer-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/portfoliooptimizer-io/rpc.ts', parseResponse: true },
  swr: { output: './src/portfoliooptimizer-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/portfoliooptimizer-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/portfoliooptimizer-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/portfoliooptimizer-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/portfoliooptimizer-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/portfoliooptimizer-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/portfoliooptimizer-io/hooks/angular-query.ts' },
  docs: {
    output: './src/portfoliooptimizer-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
