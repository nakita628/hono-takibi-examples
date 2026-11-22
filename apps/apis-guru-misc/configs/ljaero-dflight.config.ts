import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ljaero.com/dflight/V 1.0.0/openapi.yaml',
  output: './src/ljaero-dflight/routes.ts',
  template: {},
  type: { output: './src/ljaero-dflight/types.ts' },
  client: { output: './src/ljaero-dflight/client.ts', baseUrl: '/' },
  rpc: { output: './src/ljaero-dflight/rpc.ts', parseResponse: true },
  swr: { output: './src/ljaero-dflight/hooks/swr.ts' },
  'tanstack-query': { output: './src/ljaero-dflight/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ljaero-dflight/hooks/preact-query.ts' },
  'solid-query': { output: './src/ljaero-dflight/hooks/solid-query.ts' },
  'vue-query': { output: './src/ljaero-dflight/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ljaero-dflight/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ljaero-dflight/hooks/angular-query.ts' },
  docs: {
    output: './src/ljaero-dflight/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
