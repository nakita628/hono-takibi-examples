import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/drive/v3/openapi.yaml',
  output: './src/drive-v3/routes.ts',
  template: {},
  type: { output: './src/drive-v3/types.ts' },
  client: { output: './src/drive-v3/client.ts', baseUrl: '/' },
  rpc: { output: './src/drive-v3/rpc.ts', parseResponse: true },
  swr: { output: './src/drive-v3/hooks/swr.ts' },
  'tanstack-query': { output: './src/drive-v3/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/drive-v3/hooks/preact-query.ts' },
  'solid-query': { output: './src/drive-v3/hooks/solid-query.ts' },
  'vue-query': { output: './src/drive-v3/hooks/vue-query.ts' },
  'svelte-query': { output: './src/drive-v3/hooks/svelte-query.ts' },
  'angular-query': { output: './src/drive-v3/hooks/angular-query.ts' },
  docs: {
    output: './src/drive-v3/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com/drive/v3',
  },
})
