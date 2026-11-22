import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/sesv2/2019-09-27/openapi.yaml',
  output: './src/sesv2/routes.ts',
  template: {},
  type: { output: './src/sesv2/types.ts' },
  client: { output: './src/sesv2/client.ts', baseUrl: '/' },
  rpc: { output: './src/sesv2/rpc.ts', parseResponse: true },
  swr: { output: './src/sesv2/hooks/swr.ts' },
  'tanstack-query': { output: './src/sesv2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sesv2/hooks/preact-query.ts' },
  'solid-query': { output: './src/sesv2/hooks/solid-query.ts' },
  'vue-query': { output: './src/sesv2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sesv2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sesv2/hooks/angular-query.ts' },
  docs: {
    output: './src/sesv2/api.md',
    curl: true,
    baseUrl: 'https://sesv2.us-east-1.amazonaws.com',
  },
})
