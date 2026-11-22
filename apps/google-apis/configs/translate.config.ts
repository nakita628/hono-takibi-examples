import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/translate/v3beta1/openapi.yaml',
  output: './src/translate/routes.ts',
  template: {},
  type: { output: './src/translate/types.ts' },
  client: { output: './src/translate/client.ts', baseUrl: '/' },
  rpc: { output: './src/translate/rpc.ts', parseResponse: true },
  swr: { output: './src/translate/hooks/swr.ts' },
  'tanstack-query': { output: './src/translate/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/translate/hooks/preact-query.ts' },
  'solid-query': { output: './src/translate/hooks/solid-query.ts' },
  'vue-query': { output: './src/translate/hooks/vue-query.ts' },
  'svelte-query': { output: './src/translate/hooks/svelte-query.ts' },
  'angular-query': { output: './src/translate/hooks/angular-query.ts' },
  docs: {
    output: './src/translate/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
