import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/messaging-api.yml',
  output: './src/messaging-api/routes.ts',
  template: {},
  type: { output: './src/messaging-api/types.ts' },
  client: { output: './src/messaging-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/messaging-api/rpc.ts', parseResponse: true },
  swr: { output: './src/messaging-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/messaging-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/messaging-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/messaging-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/messaging-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/messaging-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/messaging-api/hooks/angular-query.ts' },
  docs: {
    output: './src/messaging-api/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
