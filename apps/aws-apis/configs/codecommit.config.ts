import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codecommit/2015-04-13/openapi.yaml',
  output: './src/codecommit/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codecommit/types.ts' },
  client: { output: './src/codecommit/client.ts', baseUrl: '/' },
  rpc: { output: './src/codecommit/rpc.ts', parseResponse: true },
  swr: { output: './src/codecommit/hooks/swr.ts' },
  'tanstack-query': { output: './src/codecommit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codecommit/hooks/preact-query.ts' },
  'solid-query': { output: './src/codecommit/hooks/solid-query.ts' },
  'vue-query': { output: './src/codecommit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codecommit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codecommit/hooks/angular-query.ts' },
  docs: {
    output: './src/codecommit/api.md',
    curl: true,
    baseUrl: 'https://codecommit.us-east-1.amazonaws.com',
  },
})
