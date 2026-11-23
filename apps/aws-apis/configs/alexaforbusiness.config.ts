import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/alexaforbusiness/2017-11-09/openapi.yaml',
  output: './src/alexaforbusiness/routes.ts',
  template: {},
  type: { output: './src/alexaforbusiness/types.ts' },
  client: { output: './src/alexaforbusiness/client.ts', baseUrl: '/' },
  rpc: { output: './src/alexaforbusiness/rpc.ts', parseResponse: true },
  swr: { output: './src/alexaforbusiness/hooks/swr.ts' },
  'tanstack-query': { output: './src/alexaforbusiness/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/alexaforbusiness/hooks/preact-query.ts' },
  'solid-query': { output: './src/alexaforbusiness/hooks/solid-query.ts' },
  'vue-query': { output: './src/alexaforbusiness/hooks/vue-query.ts' },
  'svelte-query': { output: './src/alexaforbusiness/hooks/svelte-query.ts' },
  'angular-query': { output: './src/alexaforbusiness/hooks/angular-query.ts' },
  docs: {
    output: './src/alexaforbusiness/api.md',
    curl: true,
    baseUrl: 'https://alexaforbusiness.us-east-1.amazonaws.com',
  },
})
