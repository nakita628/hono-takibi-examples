import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/textract/2018-06-27/openapi.yaml',
  output: './src/textract/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/textract/types.ts' },
  client: { output: './src/textract/client.ts', baseUrl: '/' },
  rpc: { output: './src/textract/rpc.ts', parseResponse: true },
  swr: { output: './src/textract/hooks/swr.ts' },
  'tanstack-query': { output: './src/textract/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/textract/hooks/preact-query.ts' },
  'solid-query': { output: './src/textract/hooks/solid-query.ts' },
  'vue-query': { output: './src/textract/hooks/vue-query.ts' },
  'svelte-query': { output: './src/textract/hooks/svelte-query.ts' },
  'angular-query': { output: './src/textract/hooks/angular-query.ts' },
  docs: {
    output: './src/textract/api.md',
    curl: true,
    baseUrl: 'https://textract.us-east-1.amazonaws.com',
  },
})
