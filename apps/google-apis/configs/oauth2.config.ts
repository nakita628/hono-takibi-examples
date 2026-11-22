import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/oauth2/v2/openapi.yaml',
  output: './src/oauth2/routes.ts',
  template: {},
  type: { output: './src/oauth2/types.ts' },
  client: { output: './src/oauth2/client.ts', baseUrl: '/' },
  rpc: { output: './src/oauth2/rpc.ts', parseResponse: true },
  swr: { output: './src/oauth2/hooks/swr.ts' },
  'tanstack-query': { output: './src/oauth2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/oauth2/hooks/preact-query.ts' },
  'solid-query': { output: './src/oauth2/hooks/solid-query.ts' },
  'vue-query': { output: './src/oauth2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/oauth2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/oauth2/hooks/angular-query.ts' },
  docs: {
    output: './src/oauth2/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
