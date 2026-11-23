import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/messages-olympus/1.4.0/openapi.yaml',
  output: './src/messages-olympus/routes.ts',
  template: {},
  type: { output: './src/messages-olympus/types.ts' },
  client: { output: './src/messages-olympus/client.ts', baseUrl: '/' },
  rpc: { output: './src/messages-olympus/rpc.ts', parseResponse: true },
  swr: { output: './src/messages-olympus/hooks/swr.ts' },
  'tanstack-query': { output: './src/messages-olympus/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/messages-olympus/hooks/preact-query.ts' },
  'solid-query': { output: './src/messages-olympus/hooks/solid-query.ts' },
  'vue-query': { output: './src/messages-olympus/hooks/vue-query.ts' },
  'svelte-query': { output: './src/messages-olympus/hooks/svelte-query.ts' },
  'angular-query': { output: './src/messages-olympus/hooks/angular-query.ts' },
  docs: {
    output: './src/messages-olympus/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
