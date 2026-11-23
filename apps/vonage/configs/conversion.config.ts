import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/conversion/1.0.1/openapi.yaml',
  output: './src/conversion/routes.ts',
  template: {},
  type: { output: './src/conversion/types.ts' },
  client: { output: './src/conversion/client.ts', baseUrl: '/' },
  rpc: { output: './src/conversion/rpc.ts', parseResponse: true },
  swr: { output: './src/conversion/hooks/swr.ts' },
  'tanstack-query': { output: './src/conversion/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/conversion/hooks/preact-query.ts' },
  'solid-query': { output: './src/conversion/hooks/solid-query.ts' },
  'vue-query': { output: './src/conversion/hooks/vue-query.ts' },
  'svelte-query': { output: './src/conversion/hooks/svelte-query.ts' },
  'angular-query': { output: './src/conversion/hooks/angular-query.ts' },
  docs: {
    output: './src/conversion/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
