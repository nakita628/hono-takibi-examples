import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudfunctions/v2/openapi.yaml',
  output: './src/cloudfunctions/routes.ts',
  template: {},
  type: { output: './src/cloudfunctions/types.ts' },
  client: { output: './src/cloudfunctions/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudfunctions/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudfunctions/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudfunctions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudfunctions/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudfunctions/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudfunctions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudfunctions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudfunctions/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudfunctions/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
