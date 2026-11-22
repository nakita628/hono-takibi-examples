import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/gmail/v1/openapi.yaml',
  output: './src/gmail-v1/routes.ts',
  template: {},
  type: { output: './src/gmail-v1/types.ts' },
  client: { output: './src/gmail-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/gmail-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/gmail-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/gmail-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gmail-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/gmail-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/gmail-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gmail-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gmail-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/gmail-v1/api.md',
    curl: true,
    baseUrl: 'https://gmail.googleapis.com',
  },
})
