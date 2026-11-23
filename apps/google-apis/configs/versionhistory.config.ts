import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/versionhistory/v1/openapi.yaml',
  output: './src/versionhistory/routes.ts',
  template: {},
  type: { output: './src/versionhistory/types.ts' },
  client: { output: './src/versionhistory/client.ts', baseUrl: '/' },
  rpc: { output: './src/versionhistory/rpc.ts', parseResponse: true },
  swr: { output: './src/versionhistory/hooks/swr.ts' },
  'tanstack-query': { output: './src/versionhistory/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/versionhistory/hooks/preact-query.ts' },
  'solid-query': { output: './src/versionhistory/hooks/solid-query.ts' },
  'vue-query': { output: './src/versionhistory/hooks/vue-query.ts' },
  'svelte-query': { output: './src/versionhistory/hooks/svelte-query.ts' },
  'angular-query': { output: './src/versionhistory/hooks/angular-query.ts' },
  docs: {
    output: './src/versionhistory/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
