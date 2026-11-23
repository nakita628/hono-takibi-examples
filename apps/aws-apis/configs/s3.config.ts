import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/s3/2006-03-01/openapi.yaml',
  output: './src/s3/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/s3/types.ts' },
  client: { output: './src/s3/client.ts', baseUrl: '/' },
  rpc: { output: './src/s3/rpc.ts', parseResponse: true },
  swr: { output: './src/s3/hooks/swr.ts' },
  'tanstack-query': { output: './src/s3/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/s3/hooks/preact-query.ts' },
  'solid-query': { output: './src/s3/hooks/solid-query.ts' },
  'vue-query': { output: './src/s3/hooks/vue-query.ts' },
  'svelte-query': { output: './src/s3/hooks/svelte-query.ts' },
  'angular-query': { output: './src/s3/hooks/angular-query.ts' },
  docs: {
    output: './src/s3/api.md',
    curl: true,
    baseUrl: 'https://s3.amazonaws.com',
  },
})
