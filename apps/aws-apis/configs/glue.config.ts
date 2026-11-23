import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/glue/2017-03-31/openapi.yaml',
  output: './src/glue/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/glue/types.ts' },
  client: { output: './src/glue/client.ts', baseUrl: '/' },
  rpc: { output: './src/glue/rpc.ts', parseResponse: true },
  swr: { output: './src/glue/hooks/swr.ts' },
  'tanstack-query': { output: './src/glue/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/glue/hooks/preact-query.ts' },
  'solid-query': { output: './src/glue/hooks/solid-query.ts' },
  'vue-query': { output: './src/glue/hooks/vue-query.ts' },
  'svelte-query': { output: './src/glue/hooks/svelte-query.ts' },
  'angular-query': { output: './src/glue/hooks/angular-query.ts' },
  docs: {
    output: './src/glue/api.md',
    curl: true,
    baseUrl: 'https://glue.us-east-1.amazonaws.com',
  },
})
