import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/macie/2017-12-19/openapi.yaml',
  output: './src/macie/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/macie/types.ts' },
  client: { output: './src/macie/client.ts', baseUrl: '/' },
  rpc: { output: './src/macie/rpc.ts', parseResponse: true },
  swr: { output: './src/macie/hooks/swr.ts' },
  'tanstack-query': { output: './src/macie/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/macie/hooks/preact-query.ts' },
  'solid-query': { output: './src/macie/hooks/solid-query.ts' },
  'vue-query': { output: './src/macie/hooks/vue-query.ts' },
  'svelte-query': { output: './src/macie/hooks/svelte-query.ts' },
  'angular-query': { output: './src/macie/hooks/angular-query.ts' },
  docs: {
    output: './src/macie/api.md',
    curl: true,
    baseUrl: 'https://macie.us-east-1.amazonaws.com',
  },
})
