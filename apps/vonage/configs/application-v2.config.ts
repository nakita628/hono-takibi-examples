import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/application.v2/2.1.4/openapi.yaml',
  output: './src/application-v2/routes.ts',
  template: {},
  type: { output: './src/application-v2/types.ts' },
  client: { output: './src/application-v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/application-v2/rpc.ts', parseResponse: true },
  swr: { output: './src/application-v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/application-v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/application-v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/application-v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/application-v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/application-v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/application-v2/hooks/angular-query.ts' },
  docs: {
    output: './src/application-v2/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
