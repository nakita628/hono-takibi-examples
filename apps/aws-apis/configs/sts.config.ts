import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/sts/2011-06-15/openapi.yaml',
  output: './src/sts/routes.ts',
  template: {},
  type: { output: './src/sts/types.ts' },
  client: { output: './src/sts/client.ts', baseUrl: '/' },
  rpc: { output: './src/sts/rpc.ts', parseResponse: true },
  swr: { output: './src/sts/hooks/swr.ts' },
  'tanstack-query': { output: './src/sts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sts/hooks/preact-query.ts' },
  'solid-query': { output: './src/sts/hooks/solid-query.ts' },
  'vue-query': { output: './src/sts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sts/hooks/angular-query.ts' },
  docs: {
    output: './src/sts/api.md',
    curl: true,
    baseUrl: 'https://sts.us-east-1.amazonaws.com',
  },
})
