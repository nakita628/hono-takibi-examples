import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/voice/1.3.10/openapi.yaml',
  output: './src/voice/routes.ts',
  template: {},
  type: { output: './src/voice/types.ts' },
  client: { output: './src/voice/client.ts', baseUrl: '/' },
  rpc: { output: './src/voice/rpc.ts', parseResponse: true },
  swr: { output: './src/voice/hooks/swr.ts' },
  'tanstack-query': { output: './src/voice/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/voice/hooks/preact-query.ts' },
  'solid-query': { output: './src/voice/hooks/solid-query.ts' },
  'vue-query': { output: './src/voice/hooks/vue-query.ts' },
  'svelte-query': { output: './src/voice/hooks/svelte-query.ts' },
  'angular-query': { output: './src/voice/hooks/angular-query.ts' },
  docs: {
    output: './src/voice/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
