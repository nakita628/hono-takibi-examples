import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/transcribe/2017-10-26/openapi.yaml',
  output: './src/transcribe/routes.ts',
  template: {},
  type: { output: './src/transcribe/types.ts' },
  client: { output: './src/transcribe/client.ts', baseUrl: '/' },
  rpc: { output: './src/transcribe/rpc.ts', parseResponse: true },
  swr: { output: './src/transcribe/hooks/swr.ts' },
  'tanstack-query': { output: './src/transcribe/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transcribe/hooks/preact-query.ts' },
  'solid-query': { output: './src/transcribe/hooks/solid-query.ts' },
  'vue-query': { output: './src/transcribe/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transcribe/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transcribe/hooks/angular-query.ts' },
  docs: {
    output: './src/transcribe/api.md',
    curl: true,
    baseUrl: 'https://transcribe.us-east-1.amazonaws.com',
  },
})
