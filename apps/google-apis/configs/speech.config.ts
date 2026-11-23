import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/speech/v2beta1/openapi.yaml',
  output: './src/speech/routes.ts',
  template: {},
  type: { output: './src/speech/types.ts' },
  client: { output: './src/speech/client.ts', baseUrl: '/' },
  rpc: { output: './src/speech/rpc.ts', parseResponse: true },
  swr: { output: './src/speech/hooks/swr.ts' },
  'tanstack-query': { output: './src/speech/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/speech/hooks/preact-query.ts' },
  'solid-query': { output: './src/speech/hooks/solid-query.ts' },
  'vue-query': { output: './src/speech/hooks/vue-query.ts' },
  'svelte-query': { output: './src/speech/hooks/svelte-query.ts' },
  'angular-query': { output: './src/speech/hooks/angular-query.ts' },
  docs: {
    output: './src/speech/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
