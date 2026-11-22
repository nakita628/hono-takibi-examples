import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebaseappdistribution/v1/openapi.yaml',
  output: './src/firebaseappdistribution/routes.ts',
  template: {},
  type: { output: './src/firebaseappdistribution/types.ts' },
  client: { output: './src/firebaseappdistribution/client.ts', baseUrl: '/' },
  rpc: { output: './src/firebaseappdistribution/rpc.ts', parseResponse: true },
  swr: { output: './src/firebaseappdistribution/hooks/swr.ts' },
  'tanstack-query': { output: './src/firebaseappdistribution/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firebaseappdistribution/hooks/preact-query.ts' },
  'solid-query': { output: './src/firebaseappdistribution/hooks/solid-query.ts' },
  'vue-query': { output: './src/firebaseappdistribution/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firebaseappdistribution/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firebaseappdistribution/hooks/angular-query.ts' },
  docs: {
    output: './src/firebaseappdistribution/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
