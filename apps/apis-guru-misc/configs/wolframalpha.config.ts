import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wolframalpha.com/v0.1/openapi.yaml',
  output: './src/wolframalpha/routes.ts',
  template: {},
  type: { output: './src/wolframalpha/types.ts' },
  client: { output: './src/wolframalpha/client.ts', baseUrl: '/' },
  rpc: { output: './src/wolframalpha/rpc.ts', parseResponse: true },
  swr: { output: './src/wolframalpha/hooks/swr.ts' },
  'tanstack-query': { output: './src/wolframalpha/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wolframalpha/hooks/preact-query.ts' },
  'solid-query': { output: './src/wolframalpha/hooks/solid-query.ts' },
  'vue-query': { output: './src/wolframalpha/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wolframalpha/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wolframalpha/hooks/angular-query.ts' },
  docs: {
    output: './src/wolframalpha/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
