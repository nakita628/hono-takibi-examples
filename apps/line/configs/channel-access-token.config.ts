import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/channel-access-token.yml',
  output: './src/channel-access-token/routes.ts',
  template: {},
  type: { output: './src/channel-access-token/types.ts' },
  client: { output: './src/channel-access-token/client.ts', baseUrl: '/' },
  rpc: { output: './src/channel-access-token/rpc.ts', parseResponse: true },
  swr: { output: './src/channel-access-token/hooks/swr.ts' },
  'tanstack-query': { output: './src/channel-access-token/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/channel-access-token/hooks/preact-query.ts' },
  'solid-query': { output: './src/channel-access-token/hooks/solid-query.ts' },
  'vue-query': { output: './src/channel-access-token/hooks/vue-query.ts' },
  'svelte-query': { output: './src/channel-access-token/hooks/svelte-query.ts' },
  'angular-query': { output: './src/channel-access-token/hooks/angular-query.ts' },
  docs: {
    output: './src/channel-access-token/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
