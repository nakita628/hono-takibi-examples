import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/forms/v1/openapi.yaml',
  output: './src/forms/routes.ts',
  template: {},
  type: { output: './src/forms/types.ts' },
  client: { output: './src/forms/client.ts', baseUrl: '/' },
  rpc: { output: './src/forms/rpc.ts', parseResponse: true },
  swr: { output: './src/forms/hooks/swr.ts' },
  'tanstack-query': { output: './src/forms/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/forms/hooks/preact-query.ts' },
  'solid-query': { output: './src/forms/hooks/solid-query.ts' },
  'vue-query': { output: './src/forms/hooks/vue-query.ts' },
  'svelte-query': { output: './src/forms/hooks/svelte-query.ts' },
  'angular-query': { output: './src/forms/hooks/angular-query.ts' },
  docs: {
    output: './src/forms/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
