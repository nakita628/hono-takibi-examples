import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/migrationhub-config/2019-06-30/openapi.yaml',
  output: './src/migrationhub-config/routes.ts',
  template: {},
  type: { output: './src/migrationhub-config/types.ts' },
  client: { output: './src/migrationhub-config/client.ts', baseUrl: '/' },
  rpc: { output: './src/migrationhub-config/rpc.ts', parseResponse: true },
  swr: { output: './src/migrationhub-config/hooks/swr.ts' },
  'tanstack-query': { output: './src/migrationhub-config/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/migrationhub-config/hooks/preact-query.ts' },
  'solid-query': { output: './src/migrationhub-config/hooks/solid-query.ts' },
  'vue-query': { output: './src/migrationhub-config/hooks/vue-query.ts' },
  'svelte-query': { output: './src/migrationhub-config/hooks/svelte-query.ts' },
  'angular-query': { output: './src/migrationhub-config/hooks/angular-query.ts' },
  docs: {
    output: './src/migrationhub-config/api.md',
    curl: true,
    baseUrl: 'https://migrationhub-config.us-east-1.amazonaws.com',
  },
})
