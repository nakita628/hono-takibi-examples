import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/secretmanager/v1beta1/openapi.yaml',
  output: './src/secretmanager/routes.ts',
  template: {},
  type: { output: './src/secretmanager/types.ts' },
  client: { output: './src/secretmanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/secretmanager/rpc.ts', parseResponse: true },
  swr: { output: './src/secretmanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/secretmanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/secretmanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/secretmanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/secretmanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/secretmanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/secretmanager/hooks/angular-query.ts' },
  docs: {
    output: './src/secretmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
