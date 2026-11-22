import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/medialive/2017-10-14/openapi.yaml',
  output: './src/medialive/routes.ts',
  template: {},
  type: { output: './src/medialive/types.ts' },
  client: { output: './src/medialive/client.ts', baseUrl: '/' },
  rpc: { output: './src/medialive/rpc.ts', parseResponse: true },
  swr: { output: './src/medialive/hooks/swr.ts' },
  'tanstack-query': { output: './src/medialive/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/medialive/hooks/preact-query.ts' },
  'solid-query': { output: './src/medialive/hooks/solid-query.ts' },
  'vue-query': { output: './src/medialive/hooks/vue-query.ts' },
  'svelte-query': { output: './src/medialive/hooks/svelte-query.ts' },
  'angular-query': { output: './src/medialive/hooks/angular-query.ts' },
  docs: {
    output: './src/medialive/api.md',
    curl: true,
    baseUrl: 'https://medialive.us-east-1.amazonaws.com',
  },
})
