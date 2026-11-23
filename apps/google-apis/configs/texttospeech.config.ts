import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/texttospeech/v1beta1/openapi.yaml',
  output: './src/texttospeech/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/texttospeech/types.ts' },
  client: { output: './src/texttospeech/client.ts', baseUrl: '/' },
  rpc: { output: './src/texttospeech/rpc.ts', parseResponse: true },
  swr: { output: './src/texttospeech/hooks/swr.ts' },
  'tanstack-query': { output: './src/texttospeech/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/texttospeech/hooks/preact-query.ts' },
  'solid-query': { output: './src/texttospeech/hooks/solid-query.ts' },
  'vue-query': { output: './src/texttospeech/hooks/vue-query.ts' },
  'svelte-query': { output: './src/texttospeech/hooks/svelte-query.ts' },
  'angular-query': { output: './src/texttospeech/hooks/angular-query.ts' },
  docs: {
    output: './src/texttospeech/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
