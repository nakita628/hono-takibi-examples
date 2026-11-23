import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gmail/v1/openapi.yaml',
  output: './src/gmail/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gmail/types.ts' },
  client: { output: './src/gmail/client.ts', baseUrl: '/' },
  rpc: { output: './src/gmail/rpc.ts', parseResponse: true },
  swr: { output: './src/gmail/hooks/swr.ts' },
  'tanstack-query': { output: './src/gmail/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gmail/hooks/preact-query.ts' },
  'solid-query': { output: './src/gmail/hooks/solid-query.ts' },
  'vue-query': { output: './src/gmail/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gmail/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gmail/hooks/angular-query.ts' },
  docs: {
    output: './src/gmail/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
