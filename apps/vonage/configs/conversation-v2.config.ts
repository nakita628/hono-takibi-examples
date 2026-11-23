import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/conversation.v2/1.0.1/openapi.yaml',
  output: './src/conversation-v2/routes.ts',
  template: {},
  type: { output: './src/conversation-v2/types.ts' },
  client: { output: './src/conversation-v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/conversation-v2/rpc.ts', parseResponse: true },
  swr: { output: './src/conversation-v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/conversation-v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/conversation-v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/conversation-v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/conversation-v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/conversation-v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/conversation-v2/hooks/angular-query.ts' },
  docs: {
    output: './src/conversation-v2/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
