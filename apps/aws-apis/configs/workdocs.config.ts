import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/workdocs/2016-05-01/openapi.yaml',
  output: './src/workdocs/routes.ts',
  template: {},
  type: { output: './src/workdocs/types.ts' },
  client: { output: './src/workdocs/client.ts', baseUrl: '/' },
  rpc: { output: './src/workdocs/rpc.ts', parseResponse: true },
  swr: { output: './src/workdocs/hooks/swr.ts' },
  'tanstack-query': { output: './src/workdocs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/workdocs/hooks/preact-query.ts' },
  'solid-query': { output: './src/workdocs/hooks/solid-query.ts' },
  'vue-query': { output: './src/workdocs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/workdocs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/workdocs/hooks/angular-query.ts' },
  docs: {
    output: './src/workdocs/api.md',
    curl: true,
    baseUrl: 'https://workdocs.us-east-1.amazonaws.com',
  },
})
