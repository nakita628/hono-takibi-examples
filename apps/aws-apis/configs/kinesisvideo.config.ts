import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesisvideo/2017-09-30/openapi.yaml',
  output: './src/kinesisvideo/routes.ts',
  template: {},
  type: { output: './src/kinesisvideo/types.ts' },
  client: { output: './src/kinesisvideo/client.ts', baseUrl: '/' },
  rpc: { output: './src/kinesisvideo/rpc.ts', parseResponse: true },
  swr: { output: './src/kinesisvideo/hooks/swr.ts' },
  'tanstack-query': { output: './src/kinesisvideo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kinesisvideo/hooks/preact-query.ts' },
  'solid-query': { output: './src/kinesisvideo/hooks/solid-query.ts' },
  'vue-query': { output: './src/kinesisvideo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kinesisvideo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kinesisvideo/hooks/angular-query.ts' },
  docs: {
    output: './src/kinesisvideo/api.md',
    curl: true,
    baseUrl: 'https://kinesisvideo.us-east-1.amazonaws.com',
  },
})
