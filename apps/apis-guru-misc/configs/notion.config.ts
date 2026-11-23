import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/notion.com/1.0.0/openapi.yaml',
  output: './src/notion/routes.ts',
  template: {},
  type: { output: './src/notion/types.ts' },
  client: { output: './src/notion/client.ts', baseUrl: '/' },
  rpc: { output: './src/notion/rpc.ts', parseResponse: true },
  swr: { output: './src/notion/hooks/swr.ts' },
  'tanstack-query': { output: './src/notion/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/notion/hooks/preact-query.ts' },
  'solid-query': { output: './src/notion/hooks/solid-query.ts' },
  'vue-query': { output: './src/notion/hooks/vue-query.ts' },
  'svelte-query': { output: './src/notion/hooks/svelte-query.ts' },
  'angular-query': { output: './src/notion/hooks/angular-query.ts' },
  docs: {
    output: './src/notion/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
