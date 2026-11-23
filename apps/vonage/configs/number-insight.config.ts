import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/number-insight/1.2.1/openapi.yaml',
  output: './src/number-insight/routes.ts',
  template: {},
  type: { output: './src/number-insight/types.ts' },
  client: { output: './src/number-insight/client.ts', baseUrl: '/' },
  rpc: { output: './src/number-insight/rpc.ts', parseResponse: true },
  swr: { output: './src/number-insight/hooks/swr.ts' },
  'tanstack-query': { output: './src/number-insight/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/number-insight/hooks/preact-query.ts' },
  'solid-query': { output: './src/number-insight/hooks/solid-query.ts' },
  'vue-query': { output: './src/number-insight/hooks/vue-query.ts' },
  'svelte-query': { output: './src/number-insight/hooks/svelte-query.ts' },
  'angular-query': { output: './src/number-insight/hooks/angular-query.ts' },
  docs: {
    output: './src/number-insight/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
