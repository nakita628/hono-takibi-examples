import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/numbers/1.0.20/openapi.yaml',
  output: './src/numbers/routes.ts',
  template: {},
  type: { output: './src/numbers/types.ts' },
  client: { output: './src/numbers/client.ts', baseUrl: '/' },
  rpc: { output: './src/numbers/rpc.ts', parseResponse: true },
  swr: { output: './src/numbers/hooks/swr.ts' },
  'tanstack-query': { output: './src/numbers/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/numbers/hooks/preact-query.ts' },
  'solid-query': { output: './src/numbers/hooks/solid-query.ts' },
  'vue-query': { output: './src/numbers/hooks/vue-query.ts' },
  'svelte-query': { output: './src/numbers/hooks/svelte-query.ts' },
  'angular-query': { output: './src/numbers/hooks/angular-query.ts' },
  docs: {
    output: './src/numbers/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
