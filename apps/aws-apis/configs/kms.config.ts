import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/kms/2014-11-01/openapi.yaml',
  output: './src/kms/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/kms/types.ts' },
  client: { output: './src/kms/client.ts', baseUrl: '/' },
  rpc: { output: './src/kms/rpc.ts', parseResponse: true },
  swr: { output: './src/kms/hooks/swr.ts' },
  'tanstack-query': { output: './src/kms/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kms/hooks/preact-query.ts' },
  'solid-query': { output: './src/kms/hooks/solid-query.ts' },
  'vue-query': { output: './src/kms/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kms/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kms/hooks/angular-query.ts' },
  docs: {
    output: './src/kms/api.md',
    curl: true,
    baseUrl: 'https://kms.us-east-1.amazonaws.com',
  },
})
