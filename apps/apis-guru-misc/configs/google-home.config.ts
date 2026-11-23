import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/google.home/2.0/openapi.yaml',
  output: './src/google-home/routes.ts',
  template: {},
  type: { output: './src/google-home/types.ts' },
  client: { output: './src/google-home/client.ts', baseUrl: '/' },
  rpc: { output: './src/google-home/rpc.ts', parseResponse: true },
  swr: { output: './src/google-home/hooks/swr.ts' },
  'tanstack-query': { output: './src/google-home/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/google-home/hooks/preact-query.ts' },
  'solid-query': { output: './src/google-home/hooks/solid-query.ts' },
  'vue-query': { output: './src/google-home/hooks/vue-query.ts' },
  'svelte-query': { output: './src/google-home/hooks/svelte-query.ts' },
  'angular-query': { output: './src/google-home/hooks/angular-query.ts' },
  docs: {
    output: './src/google-home/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
