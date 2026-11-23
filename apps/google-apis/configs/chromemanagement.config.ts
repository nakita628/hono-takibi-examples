import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/chromemanagement/v1/openapi.yaml',
  output: './src/chromemanagement/routes.ts',
  template: {},
  type: { output: './src/chromemanagement/types.ts' },
  client: { output: './src/chromemanagement/client.ts', baseUrl: '/' },
  rpc: { output: './src/chromemanagement/rpc.ts', parseResponse: true },
  swr: { output: './src/chromemanagement/hooks/swr.ts' },
  'tanstack-query': { output: './src/chromemanagement/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/chromemanagement/hooks/preact-query.ts' },
  'solid-query': { output: './src/chromemanagement/hooks/solid-query.ts' },
  'vue-query': { output: './src/chromemanagement/hooks/vue-query.ts' },
  'svelte-query': { output: './src/chromemanagement/hooks/svelte-query.ts' },
  'angular-query': { output: './src/chromemanagement/hooks/angular-query.ts' },
  docs: {
    output: './src/chromemanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
