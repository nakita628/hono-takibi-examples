import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/AWSMigrationHub/2017-05-31/openapi.yaml',
  output: './src/awsmigrationhub/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/awsmigrationhub/types.ts' },
  client: { output: './src/awsmigrationhub/client.ts', baseUrl: '/' },
  rpc: { output: './src/awsmigrationhub/rpc.ts', parseResponse: true },
  swr: { output: './src/awsmigrationhub/hooks/swr.ts' },
  'tanstack-query': { output: './src/awsmigrationhub/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/awsmigrationhub/hooks/preact-query.ts' },
  'solid-query': { output: './src/awsmigrationhub/hooks/solid-query.ts' },
  'vue-query': { output: './src/awsmigrationhub/hooks/vue-query.ts' },
  'svelte-query': { output: './src/awsmigrationhub/hooks/svelte-query.ts' },
  'angular-query': { output: './src/awsmigrationhub/hooks/angular-query.ts' },
  docs: {
    output: './src/awsmigrationhub/api.md',
    curl: true,
    baseUrl: 'https://awsmigrationhub.us-east-1.amazonaws.com',
  },
})
